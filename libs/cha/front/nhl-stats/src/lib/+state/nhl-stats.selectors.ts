import { NhlPlayerStatDto, NhlGoalieStatDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as NhlStatsReducer from './nhl-stats.reducer';

export const selectState =
  createFeatureSelector<NhlStatsReducer.State>('nhl-stats');

const selectRookieStats = createSelector(
  selectState,
  NhlStatsReducer.getRookieStats
);

const selectSkaterStats = createSelector(
  selectState,
  NhlStatsReducer.getSkaterStats
);

const selectGoalieStats = createSelector(
  selectState,
  NhlStatsReducer.getGoalieStats
);

const selectTotal = createSelector(selectState, NhlStatsReducer.getTotal);

const selectLoading = createSelector(selectState, NhlStatsReducer.getLoading);

const selectLoaded = createSelector(selectState, NhlStatsReducer.getLoaded);

const selectAllLoaded = createSelector(
  selectRookieStats,
  selectSkaterStats,
  selectGoalieStats,
  (
    rookieStats: NhlPlayerStatDto[],
    skaterStats: NhlPlayerStatDto[],
    goalieStats: NhlGoalieStatDto[]
  ) =>
    rookieStats.length > 0 && skaterStats.length > 0 && goalieStats.length > 0
);

export const NhlStatsSelectors = {
  selectRookieStats,
  selectSkaterStats,
  selectGoalieStats,
  selectTotal,
  selectLoaded,
  selectLoading,
  selectAllLoaded,
};
