// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialGlobalState, USER_BLANK } from './state';
import * as GlobalActions from './actions';

const globalReducer = createReducer(
  initialGlobalState,
  on(GlobalActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    error: null,
  })),
  on(GlobalActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    isLoggedIn: false,
  })),
  on(GlobalActions.syncDatabaseSuccess, (state, { users, precious, user }) => ({
    ...state,
    accounts: users,
    precious,
    user,
  })),
  on(GlobalActions.logoutSuccess, (state) => ({
    ...state,
    user: USER_BLANK,
    isAuthenticated: false,
  }))
);

export default globalReducer;
