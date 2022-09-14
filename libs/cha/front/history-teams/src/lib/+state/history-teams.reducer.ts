import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HistoryTeamsActions } from './history-teams.actions';

export interface State {
  stats: StatTeamsHistoryDto[];
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
    HistoryTeamsActions.getTeamsStatsBySeason,
    HistoryTeamsActions.getTeamsStatsBySeasonSummed,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    HistoryTeamsActions.getTeamsStatsBySeasonSuccess,
    HistoryTeamsActions.getTeamsStatsBySeasonSummedSuccess,
    (state, action) => ({
      ...state,
      stats: action.stats,
      loading: false,
      loaded: true,
    })
  ),

  on(HistoryTeamsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
