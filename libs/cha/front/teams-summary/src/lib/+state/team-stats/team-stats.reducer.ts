import { StatUserTeamHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { TeamStatsActions } from './team-stats.actions';

export interface State {
  stats: StatUserTeamHistoryDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  stats: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(TeamStatsActions.getUserTeamStatsBySeason, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(TeamStatsActions.getUserTeamStatsBySeasonSuccess, (state, action) => ({
    ...state,
    stats: action.stats,
    loading: false,
    loaded: true,
  })),

  on(TeamStatsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
