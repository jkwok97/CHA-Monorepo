import {
  PlayoffStandingsModel,
  StatTeamPlayoffsDto,
} from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeamsMiddleware } from 'libs/api/teams/src/lib/middlewares/teams.middleware';

import * as GamesPlayoffsReducer from './games-playoffs.reducer';

export const selectState =
  createFeatureSelector<GamesPlayoffsReducer.State>('games-playoffs');

const selectLoading = createSelector(
  selectState,
  GamesPlayoffsReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  GamesPlayoffsReducer.getLoaded
);

const selectPlayoffStandings = createSelector(
  selectState,
  GamesPlayoffsReducer.getPlayoffStandings
);

const selectWestTeams = createSelector(
  selectPlayoffStandings,
  (stand: PlayoffStandingsModel) =>
    stand.westTeams.map((team: StatTeamPlayoffsDto) => ({
      ...team,
      conferenceStanding: stand.westTeams.indexOf(team) + 1,
    }))
);

const selectEastTeams = createSelector(
  selectPlayoffStandings,
  (stand: PlayoffStandingsModel) =>
    stand.eastTeams.map((team: StatTeamPlayoffsDto) => ({
      ...team,
      conferenceStanding: stand.eastTeams.indexOf(team) + 1,
    }))
);

export const GamesPlayoffsSelectors = {
  selectLoaded,
  selectLoading,
  selectPlayoffStandings,
  selectWestTeams,
  selectEastTeams,
};
