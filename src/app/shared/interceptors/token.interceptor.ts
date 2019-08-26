import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../../modules/auth/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (req.url && !req.url.includes('auth')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    }

    return next.handle(req);
  }
}
