import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as TransactionsTradesReducer from './transactions-trades.reducer';

export const selectState =
  createFeatureSelector<TransactionsTradesReducer.State>('transactions-trades');

const selectSaving = createSelector(
  selectState,
  TransactionsTradesReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  TransactionsTradesReducer.getSaved
);

const selectTeamOne = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamOne
);

const selectTeamOneLoading = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamOneLoading
);

const selectTeamOneLoaded = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamOneLoaded
);

const selectTeamTwo = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamTwo
);

const selectTeamTwoLoading = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamTwoLoading
);

const selectTeamTwoLoaded = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamTwoLoaded
);

export const TransactionsTradesSelectors = {
  selectSaving,
  selectSaved,
  selectTeamOne,
  selectTeamOneLoading,
  selectTeamOneLoaded,
  selectTeamTwo,
  selectTeamTwoLoading,
  selectTeamTwoLoaded,
};
