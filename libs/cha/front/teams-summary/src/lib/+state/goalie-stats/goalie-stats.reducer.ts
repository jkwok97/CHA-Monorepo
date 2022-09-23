import { StatUserGoaliesHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { GoalieStatsActions } from './goalie-stats.actions';

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
    GoalieStatsActions.getUserGoaliesStatsBySeason,
    GoalieStatsActions.getUserGoaliesAllTimeStatsBySeason,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    GoalieStatsActions.getUserGoaliesStatsBySeasonSuccess,
    GoalieStatsActions.getUserGoaliesAllTimeStatsBySeasonSuccess,
    (state, action) => ({
      ...state,
      stats: action.stats,
      loading: false,
      loaded: true,
    })
  ),

  on(GoalieStatsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
