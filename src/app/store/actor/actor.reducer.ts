import {createReducer, on} from '@ngrx/store';
import {Actor} from '../../modules/movie/models/actor.model';
import * as ActorActions from './actor.actions';

export interface ActorState {
  actor: Actor;
}

export const initialState: ActorState = {
  actor: null
};

export const actorReducer = createReducer(
  initialState,
  on(ActorActions.getActorByImdbIdSuccess, (state, payload) => ({...state, actor: payload.actor})),
  on(ActorActions.removeActor, (state) => ({...state, actor: null}))
);
