import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const LOGIN_ACTION_KEY = '[Auth] Login';
export const REGISTER_ACTION_KEY = '[Auth] Register';
export const LOGOUT_ACTION_KEY = '[Auth] Logout';
export const FETCH_STORAGE_KEY = '[System] fetch storage data';

export const setLogin = createAction(
  LOGIN_ACTION_KEY,
  props<{ username: string; password: string }>()
);

export const setRegister = createAction(
  REGISTER_ACTION_KEY,
  props<{
    username: string;
    password: string;
    confirmPassword: string;
    fullName: string;
  }>()
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

export const setSyncCacheData = createAction(FETCH_STORAGE_KEY);

export const syncDatabaseSuccess = createAction(
  '[Sync] Database Success',
  props<{ users: User[] }>()
);
