import { statTeamDto } from '@cha/shared/entities';
import { Action, createReducer, on } from '@ngrx/store';
import { LeagueStatsTeamActions } from './stats-team-leaders.actions';

export interface State {
  leagueTeamStats: statTeamDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  leagueTeamStats: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(LeagueStatsTeamActions.getLeagueTeamStats, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(LeagueStatsTeamActions.getLeagueTeamStatsSuccess, (state, action) => ({
    ...state,
    leagueTeamStats: action.leagueTeamStats,
    loading: false,
    loaded: true,
  })),

  on(LeagueStatsTeamActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getLeagueTeamStats = (state: State) => state.leagueTeamStats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
