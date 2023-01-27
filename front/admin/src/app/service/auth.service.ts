import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



@Injectable()
export class AuthService implements HttpInterceptor {

  constructor(private authService: AuthService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // request = request.clone({
    //   headers: request.headers.set('authorization', this.authService.token),
    // });
    let jwtToken = request.clone({
      setHeaders: {
        token: 'token ' +localStorage.getItem("tokenUser")
      }
    })
    return next.handle(jwtToken);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthService,
  multi: true
}