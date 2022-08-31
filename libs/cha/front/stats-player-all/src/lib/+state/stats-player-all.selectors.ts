import { StatPlayerAllDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as StatsTeamAllReducer from './stats-player-all.reducer';

export const selectState =
  createFeatureSelector<StatsTeamAllReducer.State>('stats-player-all');

const selectLoading = createSelector(
  selectState,
  StatsTeamAllReducer.getLoading
);

const selectLoaded = createSelector(selectState, StatsTeamAllReducer.getLoaded);

const selectAll = createSelector(selectState, StatsTeamAllReducer.getAllStats);

const selectTotal = createSelector(
  selectAll,
  (allStats: StatPlayerAllDto[]) => allStats.length
)

export const StatsPlayerAllSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectTotal
};
