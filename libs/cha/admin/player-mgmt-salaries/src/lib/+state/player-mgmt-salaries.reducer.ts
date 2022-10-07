import { SalaryAllDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { PlayerMgmtSalariesActions } from './player-mgmt-salaries.actions';

export interface State {
  salaries: SalaryAllDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  salaries: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(PlayerMgmtSalariesActions.getSalaries, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    PlayerMgmtSalariesActions.editSalary,

    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(PlayerMgmtSalariesActions.getSalariesSuccess, (state, action) => ({
    ...state,
    salaries: action.salaries,
    loading: false,
    loaded: true,
  })),

  on(PlayerMgmtSalariesActions.editSalarysuccess, (state, action) => ({
    ...state,
    saving: false,
    saved: true,
  })),

  on(PlayerMgmtSalariesActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getSalaries = (state: State) => state.salaries;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
