import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueDivisionsReducer from './league-divisions.reducer';

export const selectState =
  createFeatureSelector<LeagueDivisionsReducer.State>('league-divisions');

const selectLoading = createSelector(
  selectState,
  LeagueDivisionsReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  LeagueDivisionsReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  LeagueDivisionsReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  LeagueDivisionsReducer.getSaved
);

const selectDivisions = createSelector(
  selectState,
  LeagueDivisionsReducer.getDivisions
);

export const LeagueDivisionsSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectDivisions,
};
