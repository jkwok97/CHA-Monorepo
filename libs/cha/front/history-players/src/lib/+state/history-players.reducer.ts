import { StatPlayersHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HistoryPlayersActions } from './history-players.actions';

export interface State {
  stats: StatPlayersHistoryDto[];
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
    HistoryPlayersActions.getPlayersStatsBySeason,
    HistoryPlayersActions.getPlayersStatsBySeasonSummed,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    HistoryPlayersActions.getPlayersStatsBySeasonSuccess,
    HistoryPlayersActions.getPlayersStatsBySeasonSummedSuccess,
    (state, action) => ({
      ...state,
      stats: action.stats,
      loading: false,
      loaded: true,
    })
  ),

  on(HistoryPlayersActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
