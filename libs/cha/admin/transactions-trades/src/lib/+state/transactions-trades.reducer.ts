import { GetTeamTransactionDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { TransactionsTradesActions } from './transactions-trades.actions';

export interface State {
  teamOne: GetTeamTransactionDto | null;
  teamTwo: GetTeamTransactionDto | null;
  teamOneloading: boolean;
  teamOneloaded: boolean;
  teamTwoloading: boolean;
  teamTwoloaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  teamOne: null,
  teamTwo: null,
  teamOneloading: false,
  teamOneloaded: false,
  teamTwoloading: false,
  teamTwoloaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(TransactionsTradesActions.getTeamOne, (state) => ({
    ...state,
    teamOneloading: true,
    teamOneloaded: false,
  })),

  on(TransactionsTradesActions.getTeamOneSuccess, (state, action) => ({
    ...state,
    teamOne: action.team,
    teamOneloading: false,
    teamOneloaded: true,
  })),

  on(TransactionsTradesActions.getTeamTwo, (state) => ({
    ...state,
    teamTwoloading: true,
    teamTwoloaded: false,
  })),

  on(TransactionsTradesActions.getTeamTwoSuccess, (state, action) => ({
    ...state,
    teamTwo: action.team,
    teamTwoloading: false,
    teamTwoloaded: true,
  })),

  on(
    TransactionsTradesActions.error,
    TransactionsTradesActions.reset,
    (state) => initialState
  )
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTeamOne = (state: State) => state.teamOne;

export const getTeamOneLoading = (state: State) => state.teamOneloading;

export const getTeamOneLoaded = (state: State) => state.teamOneloaded;

export const getTeamTwo = (state: State) => state.teamTwo;

export const getTeamTwoLoading = (state: State) => state.teamTwoloading;

export const getTeamTwoLoaded = (state: State) => state.teamTwoloaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
