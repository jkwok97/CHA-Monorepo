import {
  StatGoaliesHistoryDto,
  StatUserGoaliesHistoryDto,
} from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HomeGoaliesReducer from './home-goalies.reducer';

export const selectState =
  createFeatureSelector<HomeGoaliesReducer.State>('home-goalies');

const selectLoading = createSelector(
  selectState,
  HomeGoaliesReducer.getLoading
);

const selectLoaded = createSelector(selectState, HomeGoaliesReducer.getLoaded);

const selectAll = createSelector(selectState, HomeGoaliesReducer.getAllStats);

const selectGoaliesStats = createSelector(
  selectAll,
  (allGoaliesStats: StatUserGoaliesHistoryDto[]) => {
    const goaliesStats: StatGoaliesHistoryDto[] = [];
    allGoaliesStats.forEach((player: StatUserGoaliesHistoryDto) => {
      player.goaliestats.forEach((stat: StatGoaliesHistoryDto) =>
        goaliesStats.push(stat)
      );
    });
    return goaliesStats;
  }
);

export const HomeGoaliesSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectGoaliesStats,
};
