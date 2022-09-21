import { StatUserTeamHistoryDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HomeFranchiseActions } from './home-franchise.actions';

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

  on(HomeFranchiseActions.getUserTeamStatsBySeason, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(HomeFranchiseActions.getUserTeamStatsBySeasonSuccess, (state, action) => ({
    ...state,
    stats: action.stats,
    loading: false,
    loaded: true,
  })),

  on(HomeFranchiseActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
