import { LeagueDataDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { LeagueCurrentDataActions } from './league-current-data.actions';

export interface State {
  data: LeagueDataDto | null;
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  data: null,
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(LeagueCurrentDataActions.getData, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(LeagueCurrentDataActions.editData, (state) => ({
    ...state,
    saving: true,
    saved: false,
  })),

  on(LeagueCurrentDataActions.getDataSuccess, (state, action) => ({
    ...state,
    data: action.data,
    loading: false,
    loaded: true,
  })),

  on(LeagueCurrentDataActions.editDataSuccess, (state, action) => ({
    ...state,
    saving: false,
    saved: true,
  })),

  on(LeagueCurrentDataActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getData = (state: State) => state.data;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
