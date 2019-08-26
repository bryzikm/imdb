import {Actor} from './actor.model';

export interface Movie {
  _id: string;
  imdbId: string;
  title: string;
  director: string;
  year: number;
  metascore: number;
  actors: Actor[];
  posterUrl: string;
}

export interface MoviesResponse {
  collection: Movie[];
  total: number;
}
