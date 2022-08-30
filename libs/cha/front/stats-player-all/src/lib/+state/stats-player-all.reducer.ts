import { StatPlayerAllDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { StatsPlayerAllActions } from './stats-player-all.actions';

export interface State {
  stats: StatPlayerAllDto[];
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

  on(StatsPlayerAllActions.getAll, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(StatsPlayerAllActions.getAllSuccess, (state, action) => ({
    ...state,
    stats: action.stats,
    loading: false,
    loaded: true,
  })),

  on(StatsPlayerAllActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAllStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
