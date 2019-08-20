import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../modules/auth/auth.service';
import * as AuthActions from './auth.actions';
import * as SpinnerActions from '../spinner/spinner.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class AuthEffects {

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_USER),
      mergeMap((payload) => this.authService.loginUser(payload)
        .pipe(
          map((response) => ({type: AuthActions.LOGIN_USER_SUCCESS, payload: response})),
          catchError(() => of({type: SpinnerActions.HIDE_SPINNER})),
        )
      )
    )
  );

  loginUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_USER_SUCCESS),
      mergeMap(payload => {
        console.log(payload);
        this.authService.saveToken(payload)
        return of({type: SpinnerActions.HIDE_SPINNER});
      })
    )
  );

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }
}
