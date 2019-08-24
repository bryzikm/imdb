import {Movie} from '../../modules/movie/models/movie.model';
import {createReducer, on} from '@ngrx/store';
import * as MovieActions from './movie.actions';

export interface MovieState {
  movie: Movie;
  movies: Movie[];
}

export const initialState: MovieState = {
  movie: null,
  movies: [],
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.getMovieByImdbIdSuccess, (state, payload) => ({...state, movie: payload.movie})),
  on(MovieActions.getMoviesSuccess, (state, payload) => ({...state, movies: payload.movies}))
)
