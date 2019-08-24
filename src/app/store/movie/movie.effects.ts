import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as MovieActions from './movie.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {MovieService} from '../../modules/movie/movie.service';
import {Movie} from '../../modules/movie/models/movie.model';
import {getMovieByImdbIdSuccess, getMoviesSuccess} from './movie.actions';
import {hideSpinner} from '../spinner/spinner.actions';
import {notificationMiddleware, showNotification} from '../notification/notification.actions';

@Injectable()
export class MovieEffects {

  getMovieByImdbId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.GET_MOVIE_BY_IMDBID),
      mergeMap((payload: { imdbId: string }) => this.movieService.getMovieByImdbId(payload.imdbId)
        .pipe(
          switchMap((response: Movie) => [
            getMovieByImdbIdSuccess({movie: response}),
            hideSpinner()
          ]),
          catchError(() => {
            return [
              hideSpinner(),
              showNotification({isFailure: true, text: 'GET_MOVIE_ERROR'}),
              notificationMiddleware()
            ];
          })
        )
      )
    )
  );

  getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.GET_MOVIES),
      mergeMap((payload) => this.movieService.getMovies(payload)
        .pipe(
          map((response: Movie[]) => getMoviesSuccess({movies: response}))
        )
      )
    )
  );

  constructor(private actions$: Actions,
              private movieService: MovieService) {
  }
}
