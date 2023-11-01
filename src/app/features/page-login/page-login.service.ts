import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ROUTE_PATHS } from '../../core/constants';
import { PublicService } from '../../shared/logic/public.service';

const localStorageKey = `${environment.appKey}-auth`;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userWelcome: VerificationWelcome | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private publicService: PublicService,
  ) {}

  logOut() {
    this.userWelcome = undefined;
    localStorage.removeItem(localStorageKey);
    this.publicService.deleteSerialNumber();
    this.publicService.redirectSerialNumberPage();
    // this.redirectToLogin();
  }

  authLogin(body: any) {
    return this.http.post<LoginWelcome>('/auth/login', body);
  }

  authVerification(body: any) {
    return this.http.post<VerificationWelcome>('/auth/verification', body);
  }

  redirectWelcome() {
    this.router.navigate([ROUTE_PATHS.welcome]);
  }

  redirectToLogin() {
    this.router.navigate([ROUTE_PATHS.login]);
  }

  saveUserToLocalStorage(user: VerificationWelcome) {
    try {
      localStorage.setItem(localStorageKey, JSON.stringify(user));
      this.redirectWelcome();
    } catch (e) {
      console.error('Cant save to local storage');
    }
  }

  getUserFromLocalStorage(): boolean {
    try {
      const ls = localStorage.getItem(localStorageKey);

      if (ls) {
        this.userWelcome = JSON.parse(ls) as VerificationWelcome;
        return true;
      }
      return false;
    } catch (e) {
      return true;
    }
  }
}

export const canActivateAuth: CanActivateFn = (
  route: ActivatedRouteSnapshot,
) => {
  const loginService = inject(LoginService);
  const user = loginService.getUserFromLocalStorage();

  const activeRoute = route.routeConfig?.path;

  if (activeRoute === ROUTE_PATHS.login) {
    if (user) {
      loginService.redirectWelcome();
      return false;
    }

    return true;
  }

  if (user) return true;
  loginService.redirectToLogin();
  return false;
};

export interface LoginWelcome {
  verification_code: string;
  completed: boolean;
}

export interface VerificationWelcome {
  complete: boolean;
  token: string;
  data: UserData;
}

export interface UserData {
  id: string;
  name: string;
  terminal_id: string;
  branch_name: string;
  expires: string;
}
