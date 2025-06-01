import { createAction, props } from '@ngrx/store';
import { GaralleyList, SearchParams } from '../model';

export const FETCH_DATA_KEY = 'FETCH_DATA';
export const SEARCH_GARELLEY_DATA_KEY = 'SEARCH_GARELLEY_DATA';

export const fetchGarelleyData = createAction(FETCH_DATA_KEY);

export const searchGarelleyData = createAction(
  SEARCH_GARELLEY_DATA_KEY,
  props<{ params: SearchParams }>()
);
