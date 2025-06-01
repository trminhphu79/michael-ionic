import { createAction, props } from '@ngrx/store';

export const LOGIN_ACTION_KEY = '[Auth] Login';
export const LOGOUT_ACTION_KEY = '[Auth] Logout';

export const login = createAction(
  LOGIN_ACTION_KEY,
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logoutSuccess = createAction(
  LOGOUT_ACTION_KEY,
  props<{ ok: boolean }>()
);
