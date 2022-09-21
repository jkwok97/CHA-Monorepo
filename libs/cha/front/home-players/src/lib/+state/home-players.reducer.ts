import { StatUserPlayersHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HomePlayersActions } from './home-players.actions';

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
    HomePlayersActions.getUserPlayersStatsBySeason,
    HomePlayersActions.getUserPlayersAllTimeStatsBySeason,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    HomePlayersActions.getUserPlayersStatsBySeasonSuccess,
    HomePlayersActions.getUserPlayersAllTimeStatsBySeasonSuccess,
    (state, action) => ({
      ...state,
      stats: action.stats,
      loading: false,
      loaded: true,
    })
  ),

  on(HomePlayersActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
