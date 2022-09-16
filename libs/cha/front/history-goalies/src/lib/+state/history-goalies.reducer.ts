import { StatGoaliesHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HistoryGoaliesActions } from './history-goalies.actions';

export interface State {
  stats: StatGoaliesHistoryDto[];
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
    HistoryGoaliesActions.getGoaliesStatsBySeason,
    HistoryGoaliesActions.getGoaliesStatsBySeasonSummed,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    HistoryGoaliesActions.getGoaliesStatsBySeasonSuccess,
    HistoryGoaliesActions.getGoaliesStatsBySeasonSummedSuccess,
    (state, action) => ({
      ...state,
      stats: action.stats,
      loading: false,
      loaded: true,
    })
  ),

  on(HistoryGoaliesActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
