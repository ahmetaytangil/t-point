import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ROUTE_PATHS } from '../../core/constants';
import { LoginService } from '../../features/page-login/page-login.service';

const localStorageKey = `${environment.appKey}-serial-number`;

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  serial_number: string | undefined;
  generalLoading: boolean = false;

  constructor(private router: Router) {}

  deleteSerialNumber() {
    this.serial_number = undefined;
    localStorage.removeItem(localStorageKey);
  }

  saveSerialNumberToLocalStorage(serial_number: string) {
    try {
      localStorage.setItem(localStorageKey, serial_number);
      this.redirectSplash();
    } catch (e) {
      console.error('Cant save to local storage');
    }
  }

  getSerialNumberFromLocalStorage(): boolean {
    try {
      const serial_number = localStorage.getItem(localStorageKey) as string;
      if (serial_number) {
        this.serial_number = serial_number;
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return true;
    }
  }

  redirectSerialNumberPage() {
    this.router.navigate([ROUTE_PATHS.serial_number]);
  }

  redirectSplash() {
    this.router.navigate([ROUTE_PATHS.splash]);
  }
}

export const canActivateLocalStorage: CanActivateFn = (
  route: ActivatedRouteSnapshot,
) => {
  const publicService = inject(PublicService);
  const isSerialNumber = publicService.getSerialNumberFromLocalStorage();

  const activeRoute = route.routeConfig?.path;

  const loginService = inject(LoginService);
  const user = loginService.getUserFromLocalStorage();

  if (activeRoute === ROUTE_PATHS.login) {
    if (user) {
      loginService.redirectWelcome();
      return false;
    }
  }

  if (activeRoute === ROUTE_PATHS.serial_number) {
    if (isSerialNumber) {
      publicService.redirectSplash();
      return false;
    }

    return true;
  }

  if (isSerialNumber) return true;
  publicService.redirectSerialNumberPage();
  return false;
};
