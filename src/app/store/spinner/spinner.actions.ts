import {createAction, props} from '@ngrx/store';

export const SHOW_SPINNER = '[Spinner] Show Spinner';
export const HIDE_SPINNER = '[Spinner] Hide Spinner';

export const showSpinner = createAction(
  SHOW_SPINNER
);

export const hideSpinner = createAction(
  HIDE_SPINNER
);
