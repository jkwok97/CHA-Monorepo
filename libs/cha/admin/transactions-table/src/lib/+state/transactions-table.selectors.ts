import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as TransactionsTableReducer from './transactions-table.reducer';

export const selectState =
  createFeatureSelector<TransactionsTableReducer.State>('transactions-table');

const selectSaving = createSelector(
  selectState,
  TransactionsTableReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  TransactionsTableReducer.getSaved
);

const selectLoading = createSelector(
  selectState,
  TransactionsTableReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  TransactionsTableReducer.getLoaded
);

const selectTrades = createSelector(
  selectState,
  TransactionsTableReducer.getTrades
);

export const TransactionsTableSelectors = {
  selectSaving,
  selectSaved,
  selectLoading,
  selectLoaded,
  selectTrades,
};
