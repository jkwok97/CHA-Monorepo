import { ScheduleAllDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { ScheduleGamesActions } from './schedule-games.actions';

export interface State {
  schedule: ScheduleAllDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  schedule: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(ScheduleGamesActions.getAll, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(ScheduleGamesActions.getAllSuccess, (state, action) => ({
    ...state,
    schedule: action.schedule,
    loading: false,
    loaded: true,
  })),

  on(ScheduleGamesActions.saveGame, (state) => ({
    ...state,
    saving: true,
    saved: false,
  })),

  on(ScheduleGamesActions.saveGameSuccess, (state) => ({
    ...state,
    saving: false,
    saved: true,
  })),

  on(ScheduleGamesActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getSchedule = (state: State) => state.schedule;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
