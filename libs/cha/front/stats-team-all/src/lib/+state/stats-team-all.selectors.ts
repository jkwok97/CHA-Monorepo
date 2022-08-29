import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as StatsTeamAllReducer from './stats-team-all.reducer';

export const selectState =
  createFeatureSelector<StatsTeamAllReducer.State>('stats-team-all');

const selectLoading = createSelector(
  selectState,
  StatsTeamAllReducer.getLoading
);

const selectLoaded = createSelector(selectState, StatsTeamAllReducer.getLoaded);

const selectAll = createSelector(selectState, StatsTeamAllReducer.getAllStats);

export const StatsTeamAllSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
};
