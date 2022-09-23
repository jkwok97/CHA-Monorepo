import { StatUserPlayersHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { PlayerStatsActions } from './player-stats.actions';

export interface State {
  stats: StatUserPlayersHistoryDto[];
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

  on(
    PlayerStatsActions.getUserPlayersStatsBySeason,
    PlayerStatsActions.getUserPlayersAllTimeStatsBySeason,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    PlayerStatsActions.getUserPlayersStatsBySeasonSuccess,
    PlayerStatsActions.getUserPlayersAllTimeStatsBySeasonSuccess,
    (state, action) => ({
      ...state,
      stats: action.stats,
      loading: false,
      loaded: true,
    })
  ),

  on(PlayerStatsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
