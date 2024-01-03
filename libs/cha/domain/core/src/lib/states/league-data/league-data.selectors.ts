import { createSelector } from '@ngrx/store';

import * as LeagueDataReducer from './league-data.reducer';
import { AppState, selectFeatureState } from '../index';
import {
  DivisionsEnum,
  LeagueDataDto,
  TeamDto,
  UserDto,
} from '@cha/shared/entities';

const selectState = createSelector(
  selectFeatureState,
  (state: AppState) => state.currentData
);

const selectLeagueData = createSelector(
  selectState,
  LeagueDataReducer.getLeagueData
);

const selectCurrentSeason = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => {
    if (data) {
      return data.current_year;
    } else {
      return;
    }
  }
);

const selectCurrentSeasonType = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => {
    if (data) {
      return data.current_season_type;
    } else {
      return;
    }
  }
);

const selectCurrentDraftSeason = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => {
    if (data) {
      return data.current_draft_year;
    } else {
      return;
    }
  }
);

const selectIsOffSeason = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => data.offseason
);

const selectMinGames = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => data.min_games
);

const selectMinGamesStats = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => data.min_games_stats
)

const selectCurrentCapHit = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => data.current_cap
);

const selectNextYearCapHit = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => data.next_cap
);

const selectTeams = createSelector(selectState, LeagueDataReducer.getTeams);

const selectTeamsByDivision = createSelector(
  selectTeams,
  (teams: TeamDto[]) => {
    if (teams && teams.length > 0) {
      const divOneTeams = teams.filter(
        (team: TeamDto) => team.divisions_id?.id === DivisionsEnum.NORTH_WEST
      );
      const divTwoTeams = teams.filter(
        (team: TeamDto) => team.divisions_id?.id === DivisionsEnum.SOUTH_WEST
      );
      const divThreeTeams = teams.filter(
        (team: TeamDto) => team.divisions_id?.id === DivisionsEnum.NORTH_EAST
      );
      const divFourTeams = teams.filter(
        (team: TeamDto) => team.divisions_id?.id === DivisionsEnum.SOUTH_EAST
      );

      const divOneTeamItems = getTeamMenuItem(divOneTeams);
      const divTwoTeamItems = getTeamMenuItem(divTwoTeams);
      const divThreeTeamItems = getTeamMenuItem(divThreeTeams);
      const divFourTeamItems = getTeamMenuItem(divFourTeams);

      return [
        {
          label: `${divOneTeams[0].divisions_id.divisionname} Division`,
          items: divOneTeamItems,
        },
        {
          label: `${divTwoTeams[0].divisions_id.divisionname} Division`,
          items: divTwoTeamItems,
        },
        {
          label: `${divThreeTeams[0].divisions_id.divisionname} Division`,
          items: divThreeTeamItems,
        },
        {
          label: `${divFourTeams[0].divisions_id.divisionname} Division`,
          items: divFourTeamItems,
        },
      ];
    } else {
      return [];
    }
  }
);

const selectSortedTeams = createSelector(selectTeams, (teams: TeamDto[]) =>
  teams
    .filter((team: TeamDto) => team.shortname !== 'FA')
    .sort((a: TeamDto, b: TeamDto) => a.city.localeCompare(b.city))
);

const selectTeamsOptions = createSelector(selectTeams, (teams: TeamDto[]) =>
  teams.map((team: TeamDto) => ({
    value: team.shortname,
    label: `${team.city} ${team.nickname}`,
  }))
);

const selectTeamsOptionsById = createSelector(selectTeams, (teams: TeamDto[]) =>
  teams.map((team: TeamDto) => ({
    value: team.id,
    label: `${team.city} ${team.nickname}`,
  }))
);

const selectUsers = createSelector(selectState, LeagueDataReducer.getUsers);

const selectUsersOptions = createSelector(selectUsers, (users: UserDto[]) =>
  users.map((user: UserDto) => ({
    value: user.id,
    label: `${user.firstname} ${user.lastname}`,
  }))
);

const selectLoading = createSelector(selectState, LeagueDataReducer.getLoading);

const selectLoaded = createSelector(selectState, LeagueDataReducer.getLoaded);

const selectSaving = createSelector(selectState, LeagueDataReducer.getSaving);

const selectTeamIdByUserId = (userId: number) =>
  createSelector(
    selectTeams,
    (teams: TeamDto[]) =>
      teams.find((team: TeamDto) => team.users_id === userId)?.id
  );

const selectTeamNameById = (teamId: number) =>
  createSelector(
    selectTeams,
    (teams: TeamDto[]) =>
      teams.find((team: TeamDto) => team.id === teamId)?.shortname
  );

export const LeagueDataSelectors = {
  selectLeagueData,
  selectCurrentSeason,
  selectCurrentDraftSeason,
  selectCurrentSeasonType,
  selectTeams,
  selectLoaded,
  selectLoading,
  selectIsOffSeason,
  selectCurrentCapHit,
  selectNextYearCapHit,
  selectSortedTeams,
  selectSaving,
  selectTeamsOptions,
  selectTeamsOptionsById,
  selectTeamIdByUserId,
  selectTeamNameById,
  selectUsersOptions,
  selectTeamsByDivision,
  selectMinGames,
  selectMinGamesStats
};

function getTeamMenuItem(teams: TeamDto[]) {
  return teams.map((team: TeamDto) => ({
    label: `${team.city} ${team.nickname}`,
    routerLink: [`/league/teams/${team.id}`],
  }));
}
