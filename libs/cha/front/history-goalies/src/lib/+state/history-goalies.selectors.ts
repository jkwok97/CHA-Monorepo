import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HistoryGoaliesReducer from './history-goalies.reducer';

export const selectState =
  createFeatureSelector<HistoryGoaliesReducer.State>('history-goalies');

const selectLoading = createSelector(
  selectState,
  HistoryGoaliesReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  HistoryGoaliesReducer.getLoaded
);

const selectAll = createSelector(
  selectState,
  HistoryGoaliesReducer.getAllStats
);

export const HistoryGoaliesSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
};
