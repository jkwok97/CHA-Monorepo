import {
  StatGoaliesHistoryDto,
  StatUserGoaliesHistoryDto,
} from '@cha/shared/entities';
import { selectFeatureState, State } from '../index';
import { createSelector } from '@ngrx/store';

import * as GoalieStatsReducer from './goalie-stats.reducer';

const selectState = createSelector(
  selectFeatureState,
  (state: State) => state.goalieStats
);

const selectLoading = createSelector(
  selectState,
  GoalieStatsReducer.getLoading
);

const selectLoaded = createSelector(selectState, GoalieStatsReducer.getLoaded);

const selectAll = createSelector(selectState, GoalieStatsReducer.getAllStats);

const selectGoaliesStats = createSelector(
  selectAll,
  (allGoaliesStats: StatUserGoaliesHistoryDto[]) => {
    const goaliesStats: StatGoaliesHistoryDto[] = [];
    allGoaliesStats.forEach((goalie: StatUserGoaliesHistoryDto) => {
      goalie.goalieStats.forEach((stat: StatGoaliesHistoryDto) =>
        goaliesStats.push(stat)
      );
    });
    return goaliesStats;
  }
);

export const GoalieStatsSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectGoaliesStats,
};
