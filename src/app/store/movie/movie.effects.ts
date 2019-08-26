import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as MovieActions from './movie.actions';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {MovieService} from '../../modules/movie/movie.service';
import {Movie, MoviesResponse} from '../../modules/movie/models/movie.model';
import {getMovieByImdbIdSuccess, getMoviesSuccess} from './movie.actions';
import {hideSpinner} from '../spinner/spinner.actions';
import {notificationMiddleware, showNotification} from '../notification/notification.actions';
import {Filters} from '../../shared/components/table/models/filters.model';

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
      mergeMap((payload: { filters: Filters }) => this.movieService.getMovies(payload.filters)
        .pipe(
          switchMap((response: MoviesResponse) => [
            getMoviesSuccess({moviesCollection: response}),
            hideSpinner()
          ])
        )
      )
    )
  );

  constructor(private actions$: Actions,
              private movieService: MovieService) {
  }
}
