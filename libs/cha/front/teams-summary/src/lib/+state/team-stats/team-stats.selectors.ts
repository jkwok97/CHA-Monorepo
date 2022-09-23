import {
  StatTeamsHistoryDto,
  StatUserTeamHistoryDto,
} from '@cha/shared/entities';
import { selectFeatureState, State } from '../index';
import { createSelector } from '@ngrx/store';

import * as TeamStatsReducer from './team-stats.reducer';

const selectState = createSelector(
  selectFeatureState,
  (state: State) => state.teamStats
);

const selectLoading = createSelector(selectState, TeamStatsReducer.getLoading);

const selectLoaded = createSelector(selectState, TeamStatsReducer.getLoaded);

const selectAll = createSelector(selectState, TeamStatsReducer.getAllStats);

const selectTeamStats = createSelector(
  selectAll,
  (allTeamStats: StatUserTeamHistoryDto[]) => {
    const teamStats: StatTeamsHistoryDto[] = [];
    allTeamStats.forEach((team: StatUserTeamHistoryDto) => {
      team.teamStats.forEach((stat: StatTeamsHistoryDto) =>
        teamStats.push(stat)
      );
    });
    return teamStats;
  }
);

export const TeamStatsSelectors = {
  selectLoaded,
  selectLoading,
  selectTeamStats,
};
