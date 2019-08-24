import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../modules/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly AUTH_PATH: string = 'auth';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigate([this.AUTH_PATH]);

      return false;
    }

    return true;
  }
}
