import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueCurrentDataReducer from './league-current-data.reducer';

export const selectState =
  createFeatureSelector<LeagueCurrentDataReducer.State>('league-current-data');

const selectLoading = createSelector(
  selectState,
  LeagueCurrentDataReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  LeagueCurrentDataReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  LeagueCurrentDataReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  LeagueCurrentDataReducer.getSaved
);

const selectCurrentData = createSelector(
  selectState,
  LeagueCurrentDataReducer.getData
);

export const LeagueCurrentDataSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectCurrentData,
};
