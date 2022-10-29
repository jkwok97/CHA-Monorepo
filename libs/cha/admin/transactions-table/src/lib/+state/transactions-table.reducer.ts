import { GetTradeDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { TransactionsTableActions } from './transactions-table.actions';

export interface State {
  trades: GetTradeDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  trades: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(TransactionsTableActions.get, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(TransactionsTableActions.getSuccess, (state, action) => ({
    ...state,
    trades: action.trades,
    loading: false,
    loaded: true,
  })),

  on(TransactionsTableActions.edit, (state) => ({
    ...state,
    saving: true,
    saved: false,
  })),

  on(TransactionsTableActions.editSuccess, (state) => ({
    ...state,
    saving: false,
    saved: true,
  })),

  on(
    TransactionsTableActions.error,
    TransactionsTableActions.reset,
    (state) => initialState
  )
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTrades = (state: State) => state.trades;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
