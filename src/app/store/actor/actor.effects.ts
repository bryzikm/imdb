import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as ActorActions from '../actor/actor.actions';
import {getActorByImdbIdSuccess} from './actor.actions';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {hideSpinner} from '../spinner/spinner.actions';
import {notificationMiddleware, showNotification} from '../notification/notification.actions';
import {ActorService} from '../../modules/movie/actor.service';
import {Actor} from '../../modules/movie/models/actor.model';

@Injectable()
export class ActorEffects {

  getActorByImdbId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActorActions.GET_ACTOR_BY_IMDBID),
      mergeMap((payload: { imdbId: string }) => this.actorService.getActorByImdbId(payload.imdbId)
        .pipe(
          switchMap((response: Actor) => [
            getActorByImdbIdSuccess({actor: response}),
            hideSpinner()
          ]),
          catchError(() => {
            return [
              hideSpinner(),
              showNotification({isFailure: true, text: 'GET_ACTOR_IMAGE_ERROR'}),
              notificationMiddleware()
            ];
          })
        )
      )
    )
  );

  constructor(private actions$: Actions,
              private actorService: ActorService) {
  }
}
