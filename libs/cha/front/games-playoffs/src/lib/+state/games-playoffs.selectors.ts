import { PlayoffStandingsModel } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

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
  (stand: PlayoffStandingsModel) => stand.westTeams
);

const selectEastTeams = createSelector(
  selectPlayoffStandings,
  (stand: PlayoffStandingsModel) => stand.eastTeams
);

export const GamesPlayoffsSelectors = {
  selectLoaded,
  selectLoading,
  selectPlayoffStandings,
  selectWestTeams,
  selectEastTeams,
};
