import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TGlobalState } from './state';

export const selectAppState = createFeatureSelector<TGlobalState>('global');

export const selectAccounts = createSelector(
  selectAppState,
  (state) => state.accounts
);
