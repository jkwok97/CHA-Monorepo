import { UserDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DivisionDto } from 'libs/cha/shared/entities/src/lib/dtos/league/division.dto';

import * as LeagueTeamsReducer from './league-teams.reducer';

export const selectState =
  createFeatureSelector<LeagueTeamsReducer.State>('league-teams');

const selectLoading = createSelector(
  selectState,
  LeagueTeamsReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueTeamsReducer.getLoaded);

const selectSaving = createSelector(selectState, LeagueTeamsReducer.getSaving);

const selectSaved = createSelector(selectState, LeagueTeamsReducer.getSaved);

const selectTeams = createSelector(selectState, LeagueTeamsReducer.getTeams);

const selectUsers = createSelector(selectState, LeagueTeamsReducer.getUsers);

const selectUsersOptions = createSelector(selectUsers, (users: UserDto[]) =>
  users.map((user: UserDto) => ({
    id: user.id,
    full_name: `${user.firstname} ${user.lastname}`,
  }))
);

const selectDivisions = createSelector(
  selectState,
  LeagueTeamsReducer.getDivisions
);

const selectDivisionsOptions = createSelector(
  selectDivisions,
  (divisions: DivisionDto[]) =>
    divisions.map((division: DivisionDto) => ({
      id: division.id,
      name: division.divisionname,
    }))
);

export const LeagueTeamsSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectTeams,
  selectUsers,
  selectUsersOptions,
  selectDivisionsOptions,
};
