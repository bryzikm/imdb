import {createAction, props} from '@ngrx/store';

export const LOGIN_USER = '[Auth] Login User';
export const LOGIN_USER_SUCCESS = '[Auth] Login User Success';
export const LOGOUT_USER = '[Auth] Logout User';
export const LOGOUT_USER_SUCCESS = '[Auth] Logout User Success';

export const loginUser = createAction(
  LOGIN_USER,
  props<{login: string; password: string}>()
);

export const loginUserSuccess = createAction(
  LOGIN_USER_SUCCESS,
  props<{token: string}>()
);

export const logoutUser = createAction(
  LOGOUT_USER
);

export const logoutUserSuccess = createAction(
  LOGOUT_USER_SUCCESS
);
