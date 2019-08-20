import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../modules/auth/auth.service';
import * as AuthActions from './auth.actions';
import {hideSpinner} from '../spinner/spinner.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {loginUserSuccess} from './auth.actions';
import {notificationMiddleware, showNotification} from '../notification/notification.actions';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_USER),
      mergeMap((payload) => this.authService.loginUser(payload)
        .pipe(
          map((response: { token: string }) => loginUserSuccess(response)),
          catchError(() => [
            hideSpinner(),
            showNotification({isFailure: true, text: 'SIGN_IN_FAILED'}),
            notificationMiddleware()
          ])
        ),
      )
    )
  );

  loginUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_USER_SUCCESS),
      switchMap(payload => {
        this.authService.saveToken(payload);
        this.router.navigate(['/video']);

        return [
          hideSpinner(),
          showNotification({isFailure: false, text: 'SIGN_IN_SUCCESS'}),
          notificationMiddleware()
        ];
      })
    )
  );

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }
}
