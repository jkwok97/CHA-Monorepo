import {
  ConferencesEnum,
  PlayoffStandingsModel,
  StatTeamPlayoffsDto,
} from '@cha/shared/entities';
import { Action, createReducer, on } from '@ngrx/store';
import { GamesPlayoffsActions } from './games-playoffs.actions';

export interface State {
  playoffStandings: PlayoffStandingsModel;
  loading: boolean;
  loaded: boolean;
  game: File | null;
  gameLoading: boolean;
}

const initialState: State = {
  playoffStandings: {
    eastTeams: [],
    westTeams: [],
  },
  loading: false,
  loaded: false,
  game: null,
  gameLoading: false,
};

const r = createReducer(
  initialState,

  on(GamesPlayoffsActions.getStandings, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(GamesPlayoffsActions.getStandingsSuccess, (state, action) => ({
    ...state,
    playoffStandings: separateConferences(action.playoffStandings),
    loading: false,
    loaded: true,
  })),

  on(GamesPlayoffsActions.getBoxScore, (state, action) => ({
    ...state,
    gameLoading: true,
  })),

  on(GamesPlayoffsActions.getBoxScoreSuccess, (state, action) => ({
    ...state,
    game: action.game,
    gameLoading: false,
  })),

  on(GamesPlayoffsActions.getBoxScoreError, (state, action) => ({
    ...state,
    game: null,
    gameLoading: false,
  })),

  on(GamesPlayoffsActions.resetBoxScore, (state, action) => ({
    ...state,
    game: null,
  })),

  on(GamesPlayoffsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getPlayoffStandings = (state: State) => state.playoffStandings;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getGameLoading = (state: State) => state.gameLoading;

export const getGame = (state: State) => state.game;

function separateConferences(standings: StatTeamPlayoffsDto[]) {
  const eastTeams = standings.filter(
    (team: StatTeamPlayoffsDto) =>
      team.division.conference_id.id === ConferencesEnum.EASTERN
  );

  eastTeams.splice(eastTeams.length - 2, 2);

  const westTeams = standings.filter(
    (team: StatTeamPlayoffsDto) =>
      team.division.conference_id.id === ConferencesEnum.WESTERN
  );

  westTeams.splice(westTeams.length - 2, 2);

  return {
    eastTeams,
    westTeams,
  };
}
