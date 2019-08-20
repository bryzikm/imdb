import {createAction, props} from '@ngrx/store';

export const SHOW_NOTIFICATION = '[Notification] Show Notification';
export const NOTIFICATION_MIDDLEWARE = '[Notification] Notification Middleware';
export const HIDE_NOTIFICATION = '[Notification] Hide Notification';

export const showNotification = createAction(
  SHOW_NOTIFICATION,
  props<{isFailure: boolean; text: string}>()
);

export const notificationMiddleware = createAction(
  NOTIFICATION_MIDDLEWARE
);

export const hideNotification = createAction(
  HIDE_NOTIFICATION
);
