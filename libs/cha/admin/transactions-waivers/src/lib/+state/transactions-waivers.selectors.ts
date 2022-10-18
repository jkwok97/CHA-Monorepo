import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as TransactionsWaiversReducer from './transactions-waivers.reducer';

export const selectState =
  createFeatureSelector<TransactionsWaiversReducer.State>('transactions-waivers');

const selectLoading = createSelector(
  selectState,
  TransactionsWaiversReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  TransactionsWaiversReducer.getLoaded
);

const selectWaivers = createSelector(
  selectState,
  TransactionsWaiversReducer.getWaivers
);

export const TransactionsWaiversSelectors = {
  selectLoaded,
  selectLoading,
  selectWaivers,
};
