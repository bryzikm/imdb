import {Movie, MoviesResponse} from '../../modules/movie/models/movie.model';
import {createReducer, on} from '@ngrx/store';
import * as MovieActions from './movie.actions';

export interface MovieState {
  movie: Movie;
  moviesCollection: MoviesResponse;
}

export const initialState: MovieState = {
  movie: null,
  moviesCollection: {
    collection: [],
    total: 0,
  }
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.getMovieByImdbIdSuccess, (state, payload) => ({...state, movie: payload.movie})),
  on(MovieActions.getMoviesSuccess, (state, payload) => ({...state, moviesCollection: payload.moviesCollection}))
);
