import { createSelector } from '@ngrx/store';

import * as LeagueDataReducer from './league-data.reducer';
import { AppState, selectFeatureState } from '../index';
import { LeagueDataDto, TeamDto } from '@cha/shared/entities';

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

const selectCurrentCapHit = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => data.current_cap
);

const selectNextYearCapHit = createSelector(
  selectLeagueData,
  (data: LeagueDataDto) => data.next_cap
);

const selectTeams = createSelector(selectState, LeagueDataReducer.getTeams);

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

const selectLoading = createSelector(selectState, LeagueDataReducer.getLoading);

const selectLoaded = createSelector(selectState, LeagueDataReducer.getLoaded);

const selectSaving = createSelector(selectState, LeagueDataReducer.getSaving);

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
  selectTeamsOptionsById
};
