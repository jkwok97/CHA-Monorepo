import {
  StatTeamsHistoryDto,
  StatUserTeamHistoryDto,
} from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as TeamsSummaryReducer from './teams-summary.reducer';

export const selectState =
  createFeatureSelector<TeamsSummaryReducer.State>('teams-summary');

const selectLoading = createSelector(
  selectState,
  TeamsSummaryReducer.getLoading
);

const selectLoaded = createSelector(selectState, TeamsSummaryReducer.getLoaded);

const selectAll = createSelector(selectState, TeamsSummaryReducer.getAllStats);

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

const selectUserId = createSelector(selectState, TeamsSummaryReducer.getUserId);

export const TeamsSummarySelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectTeamStats,
  selectUserId,
};
