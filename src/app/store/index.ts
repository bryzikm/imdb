import * as fromMovie from './movie/movie.reducer';
import * as fromActor from './actor/actor.reducer';
import * as fromSpinner from './spinner/spinner.reducer';
import * as fromNotification from './notification/notification.reducer';

export interface AppState {
  movie: fromMovie.MovieState;
  actor: fromActor.ActorState;
  spinner: fromSpinner.SpinnerState;
  notification: fromNotification.NotificationState;
}

export const appInitialState: AppState = {
  movie: fromMovie.initialState,
  actor: fromActor.initialState,
  spinner: fromSpinner.initialState,
  notification: fromNotification.initialState
};
