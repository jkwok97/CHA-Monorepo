import { GetTransactionDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { LeagueTradesActions } from './league-trades.actions';

export interface State {
  transactions: GetTransactionDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  transactions: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(LeagueTradesActions.getTrades, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(LeagueTradesActions.getTradesSuccess, (state, action) => ({
    ...state,
    transactions: action.transactions,
    loading: false,
    loaded: true,
  })),

  on(LeagueTradesActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTransactions = (state: State) => state.transactions;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
