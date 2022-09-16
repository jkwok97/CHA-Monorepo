import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HistoryPlayersReducer from './history-players.reducer';

export const selectState =
  createFeatureSelector<HistoryPlayersReducer.State>('history-players');

const selectLoading = createSelector(
  selectState,
  HistoryPlayersReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  HistoryPlayersReducer.getLoaded
);

const selectAll = createSelector(
  selectState,
  HistoryPlayersReducer.getAllStats
);

export const HistoryPlayersSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
};
