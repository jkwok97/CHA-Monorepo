import { StatPlayerAllDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as StatsPlayerAllReducer from './stats-player-all.reducer';

export const selectState =
  createFeatureSelector<StatsPlayerAllReducer.State>('stats-player-all');

const selectLoading = createSelector(
  selectState,
  StatsPlayerAllReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  StatsPlayerAllReducer.getLoaded
);

const selectAll = createSelector(
  selectState,
  StatsPlayerAllReducer.getAllStats
);

const selectTotal = createSelector(
  selectAll,
  (allStats: StatPlayerAllDto[]) => allStats.length
);

const selectAllForwards = createSelector(
  selectAll,
  (allStats: StatPlayerAllDto[]) =>
    allStats.filter((stat: StatPlayerAllDto) => stat.player_id?.isforward)
);

const selectAllForwardTotal = createSelector(
  selectAllForwards,
  (allStats: StatPlayerAllDto[]) => allStats.length
);

const selectAllDefense = createSelector(
  selectAll,
  (allStats: StatPlayerAllDto[]) =>
    allStats.filter((stat: StatPlayerAllDto) => stat.player_id?.isdefense)
);

const selectAllDefenseTotal = createSelector(
  selectAllDefense,
  (allStats: StatPlayerAllDto[]) => allStats.length
);

export const StatsPlayerAllSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectTotal,
  selectAllForwards,
  selectAllForwardTotal,
  selectAllDefense,
  selectAllDefenseTotal,
};
