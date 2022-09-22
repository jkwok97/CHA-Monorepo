import { StatUserGoaliesHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HomeGoaliesActions } from './home-goalies.actions';

export interface State {
  stats: StatUserGoaliesHistoryDto[];
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
    HomeGoaliesActions.getUserGoaliesStatsBySeason,
    HomeGoaliesActions.getUserGoaliesAllTimeStatsBySeason,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    HomeGoaliesActions.getUserGoaliesStatsBySeasonSuccess,
    HomeGoaliesActions.getUserGoaliesAllTimeStatsBySeasonSuccess,
    (state, action) => ({
      ...state,
      stats: action.stats,
      loading: false,
      loaded: true,
    })
  ),

  on(HomeGoaliesActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
