import {createAction, props} from '@ngrx/store';
import {Movie} from '../../modules/movie/models/movie.model';

export const GET_MOVIE_BY_IMDBID = '[Movie] Get Movie By ImdbId';
export const GET_MOVIE_BY_IMDBID_SUCCESS = '[Movie] Get Movie By ImdbId Success';
export const GET_MOVIES = '[Movie] Get Movies';
export const GET_MOVIES_SUCCESS = '[Movie] Get Movies Success';

export const getMovieByImdbId = createAction(
  GET_MOVIE_BY_IMDBID,
  props<{imdbId: string}>()
);

export const getMovieByImdbIdSuccess = createAction(
  GET_MOVIE_BY_IMDBID_SUCCESS,
  props<{movie: Movie}>()
);

export const getMovies = createAction(
  GET_MOVIES,
  props<{params: any}>()
);

export const getMoviesSuccess = createAction(
  GET_MOVIES_SUCCESS,
  props<{movies: Movie[]}>()
);
