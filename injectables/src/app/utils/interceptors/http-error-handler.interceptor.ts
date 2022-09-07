import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(() => {
        console.log('Interceptor log');
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('Interceptorban hiba log');
        console.log(error);

        return throwError(error)
      })
    );
  }
}
