import { StatTeamAllDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { StatsTeamAllActions } from './stats-team-all.actions';

export interface State {
  stats: StatTeamAllDto[];
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

  on(StatsTeamAllActions.getAll, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(StatsTeamAllActions.getAllSuccess, (state, action) => ({
    ...state,
    stats: action.stats,
    loading: false,
    loaded: true,
  })),

  on(StatsTeamAllActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
