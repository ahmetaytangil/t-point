import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../features/page-login/page-login.service';

@Injectable()
export class HttpInterceptorApp implements HttpInterceptor {
  private baseUrl: string = environment.apiUrl;

  constructor(private loginService: LoginService) {}

  setHeaders(request: HttpRequest<any>) {
    return request.clone({
      url: this.baseUrl + request.url,
      setHeaders: {
        Authorization: `Bearer ${this.loginService.userWelcome?.token}`,
      },
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next
      .handle(this.setHeaders(request))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const message =
            error?.error?.message ||
            error?.error?.detail ||
            error.message ||
            error;

          return throwError(() => {
            return message;
          });
        }),
      )
      .pipe(
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          return evt;
        }),
      );
  }
}
