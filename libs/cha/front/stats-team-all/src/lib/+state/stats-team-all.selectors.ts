import {
  ConferencesEnum,
  DivisionsEnum,
  StatTeamAllDto,
} from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as StatsTeamAllReducer from './stats-team-all.reducer';

export const selectState =
  createFeatureSelector<StatsTeamAllReducer.State>('stats-team-all');

const selectLoading = createSelector(
  selectState,
  StatsTeamAllReducer.getLoading
);

const selectLoaded = createSelector(selectState, StatsTeamAllReducer.getLoaded);

const selectAll = createSelector(selectState, StatsTeamAllReducer.getAllStats);

const selectWesternTeams = createSelector(
  selectAll,
  (teams: StatTeamAllDto[]) =>
    teams.filter(
      (team: StatTeamAllDto) => team.conference.id === ConferencesEnum.WESTERN
    )
);

const selectEasternTeams = createSelector(
  selectAll,
  (teams: StatTeamAllDto[]) =>
    teams.filter(
      (team: StatTeamAllDto) => team.conference.id === ConferencesEnum.EASTERN
    )
);

const selectNorthWesternTeams = createSelector(
  selectAll,
  (teams: StatTeamAllDto[]) =>
    teams.filter(
      (team: StatTeamAllDto) =>
        team.team_id.divisions_id.id === DivisionsEnum.NORTH_WEST
    )
);

const selectSouthWesternTeams = createSelector(
  selectAll,
  (teams: StatTeamAllDto[]) =>
    teams.filter(
      (team: StatTeamAllDto) =>
        team.team_id.divisions_id.id === DivisionsEnum.SOUTH_WEST
    )
);

const selectNorthEasternTeams = createSelector(
  selectAll,
  (teams: StatTeamAllDto[]) =>
    teams.filter(
      (team: StatTeamAllDto) =>
        team.team_id.divisions_id.id === DivisionsEnum.NORTH_EAST
    )
);

const selectSouthEasternTeams = createSelector(
  selectAll,
  (teams: StatTeamAllDto[]) =>
    teams.filter(
      (team: StatTeamAllDto) =>
        team.team_id.divisions_id.id === DivisionsEnum.SOUTH_EAST
    )
);

export const StatsTeamAllSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectWesternTeams,
  selectEasternTeams,
  selectNorthWesternTeams,
  selectNorthEasternTeams,
  selectSouthWesternTeams,
  selectSouthEasternTeams,
};
