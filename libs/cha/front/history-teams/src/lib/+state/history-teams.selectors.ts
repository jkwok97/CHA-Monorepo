import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HistoryTeamsReducer from './history-teams.reducer';

export const selectState =
  createFeatureSelector<HistoryTeamsReducer.State>('history-teams');

const selectLoading = createSelector(
  selectState,
  HistoryTeamsReducer.getLoading
);

const selectLoaded = createSelector(selectState, HistoryTeamsReducer.getLoaded);

const selectAll = createSelector(selectState, HistoryTeamsReducer.getAllStats);

export const HistoryTeamsSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
};
