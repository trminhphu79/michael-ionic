// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialGlobalState } from './state';
import * as GlobalActions from './actions';

const globalReducer = createReducer(
  initialGlobalState,
  on(GlobalActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoggedIn: true,
    error: null,
  })),
  on(GlobalActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    isLoggedIn: false,
  })),
  on(GlobalActions.logoutSuccess, () => initialGlobalState),
  on(GlobalActions.syncDatabaseSuccess, (state, { users }) => ({
    ...state,
    accounts: users,
  }))
);

export default globalReducer;
