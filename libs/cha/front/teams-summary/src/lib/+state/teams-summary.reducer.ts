import { StatUserTeamHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { TeamsSummaryActions } from './teams-summary.actions';

export interface State {
  teamStats: StatUserTeamHistoryDto[];
  userId: number | undefined;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  teamStats: [],
  userId: undefined,
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(TeamsSummaryActions.getUserTeamStatsBySeason, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(TeamsSummaryActions.getUserTeamStatsBySeasonSuccess, (state, action) => ({
    ...state,
    teamStats: action.stats,
    loading: false,
    loaded: true,
  })),

  on(TeamsSummaryActions.getUserIdByTeamIdSuccess, (state, action) => ({
    ...state,
    userId: action.userId,
  })),

  on(TeamsSummaryActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTeamStats = (state: State) => state.teamStats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getUserId = (state: State) => state.userId;
