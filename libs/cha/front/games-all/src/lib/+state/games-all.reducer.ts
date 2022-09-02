import { ScheduleAllDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { GamesAllActions } from './games-all.actions';

export interface State {
  schedule: ScheduleAllDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  schedule: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(GamesAllActions.getAll, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(GamesAllActions.getAllSuccess, (state, action) => ({
    ...state,
    schedule: action.schedule,
    loading: false,
    loaded: true,
  })),

  on(GamesAllActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getSchedule = (state: State) => state.schedule;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
