import { NhlGoalieStatDto, NhlPlayerStatDto } from '@cha/shared/api';
import { Action, createReducer, on } from '@ngrx/store';
import { NhlStatsActions } from './nhl-stats.actions';

export interface State {
  rookieStats: NhlPlayerStatDto[];
  playerStats: NhlPlayerStatDto[];
  goalieStats: NhlGoalieStatDto[];
  loading: boolean;
  loaded: boolean;
  total: number;
}

const initialState: State = {
  rookieStats: [],
  playerStats: [],
  goalieStats: [],
  loading: false,
  loaded: false,
  total: 0,
};

const r = createReducer(
  initialState,

  on(
    NhlStatsActions.getRookieStats,
    NhlStatsActions.getSportsnetStats,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(NhlStatsActions.getSportsnetStatsSuccess, (state, action) => ({
    ...state,
    playerStats: action.skaters,
    goalieStats: action.goalies,
    loading: false,
    loaded: true,
  })),

  on(NhlStatsActions.getRookieStatsSuccess, (state, action) => ({
    ...state,
    rookieStats: action.stats,
    loading: false,
    loaded: true,
    total: action.total,
  })),

  on(NhlStatsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTotal = (state: State) => state.total;

export const getRookieStats = (state: State) => state.rookieStats;

export const getSkaterStats = (state: State) => state.playerStats;

export const getGoalieStats = (state: State) => state.goalieStats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
