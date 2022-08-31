import { StatGoalieAllDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as StatsGoalieAllReducer from './stats-goalie-all.reducer';

export const selectState =
  createFeatureSelector<StatsGoalieAllReducer.State>('stats-goalie-all');

const selectLoading = createSelector(
  selectState,
  StatsGoalieAllReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  StatsGoalieAllReducer.getLoaded
);

const selectAll = createSelector(
  selectState,
  StatsGoalieAllReducer.getAllStats
);

const selectTotal = createSelector(
  selectAll,
  (allStats: StatGoalieAllDto[]) => allStats.length
);

export const StatsGoalieAllSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectTotal,
};
