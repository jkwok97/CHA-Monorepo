import {
  StatTeamsHistoryDto,
  StatUserTeamHistoryDto,
} from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HomeFranchiseReducer from './home-franchise.reducer';

export const selectState =
  createFeatureSelector<HomeFranchiseReducer.State>('home-franchise');

const selectLoading = createSelector(
  selectState,
  HomeFranchiseReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  HomeFranchiseReducer.getLoaded
);

const selectAll = createSelector(selectState, HomeFranchiseReducer.getAllStats);

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

export const HomeFranchiseSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectTeamStats
};
