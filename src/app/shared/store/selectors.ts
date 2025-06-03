import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TGlobalState } from './state';

export const selectAppState = createFeatureSelector<TGlobalState>('global');

export const selectAccounts = createSelector(
  selectAppState,
  (state) => state.accounts
);

export const selectPrecious = createSelector(
  selectAppState,
  (state) => state.precious
);

export const selectUser = createSelector(selectAppState, (state) => state.user);

export const selectAuthenticated = createSelector(
  selectAppState,
  (state) => state.isAuthenticated
);
