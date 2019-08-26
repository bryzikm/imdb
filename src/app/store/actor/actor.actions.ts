import {createAction, props} from '@ngrx/store';
import {Actor} from '../../modules/movie/models/actor.model';

export const GET_ACTOR_BY_IMDBID = '[Actor] Get Actor By ImdbId';
export const GET_ACTOR_BY_IMDBID_SUCCESS = '[Actor] Get Actor By ImdbId Success';
export const REMOVE_ACTOR = '[Actor] Remove Actor';

export const getActorByImdbId = createAction(
  GET_ACTOR_BY_IMDBID,
  props<{ imdbId: string }>()
);

export const getActorByImdbIdSuccess = createAction(
  GET_ACTOR_BY_IMDBID_SUCCESS,
  props<{ actor: Actor }>()
);

export const removeActor = createAction(
  REMOVE_ACTOR
);
