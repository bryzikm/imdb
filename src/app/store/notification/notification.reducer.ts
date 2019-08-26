import {createReducer, on} from '@ngrx/store';
import * as NotificationActions from './notification.actions';

export interface NotificationState {
  isVisible: boolean;
  isFailure: boolean;
  text: string;
}

export const initialState: NotificationState = {
  isVisible: false,
  isFailure: false,
  text: null
};

export const notificationReducer = createReducer(
  initialState,
  on(NotificationActions.showNotification, (state, {isFailure, text}) => ({ ...state, isVisible: true, isFailure, text })),
  on(NotificationActions.hideNotification, () => ({ ...initialState }))
);
