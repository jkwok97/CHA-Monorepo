import { WaiversDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { TransactionsWaiversActions } from './transactions-waivers.actions';

export interface State {
  waivers: WaiversDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  waivers: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(TransactionsWaiversActions.getWaivers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(TransactionsWaiversActions.getWaiversSuccess, (state, action) => ({
    ...state,
    waivers: action.waivers,
    loading: false,
    loaded: true,
  })),

  on(TransactionsWaiversActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getWaivers = (state: State) => state.waivers;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
