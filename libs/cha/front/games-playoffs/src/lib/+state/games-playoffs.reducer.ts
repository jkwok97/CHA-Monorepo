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
}

const initialState: State = {
  playoffStandings: {
    eastTeams: [],
    westTeams: [],
  },
  loading: false,
  loaded: false,
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

  on(GamesPlayoffsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getPlayoffStandings = (state: State) => state.playoffStandings;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

function separateConferences(standings: StatTeamPlayoffsDto[]) {
  const eastTeams = standings
    .filter(
      (team: StatTeamPlayoffsDto) =>
        team.conference.id === ConferencesEnum.EASTERN
    )
    .splice(standings.length - 2, 2);

  const westTeams = standings
    .filter(
      (team: StatTeamPlayoffsDto) =>
        team.conference.id === ConferencesEnum.WESTERN
    )
    .splice(standings.length - 2, 2);

  return {
    eastTeams,
    westTeams,
  };
}
