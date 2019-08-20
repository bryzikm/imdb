import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as NotificationActions from './notification.actions';
import {debounceTime, map, tap} from 'rxjs/operators';
import {hideNotification} from './notification.actions';

@Injectable()
export class NotificationEffects {

  notificationMiddleware$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotificationActions.NOTIFICATION_MIDDLEWARE),
      debounceTime(5000),
      map(() => hideNotification())
    )
  );

  constructor(private actions$: Actions) {
  }
}
