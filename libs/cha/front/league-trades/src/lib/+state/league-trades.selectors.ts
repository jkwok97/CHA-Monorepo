import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueTradesReducer from './league-trades.reducer';

export const selectState =
  createFeatureSelector<LeagueTradesReducer.State>('league-trades');

const selectLoading = createSelector(
  selectState,
  LeagueTradesReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueTradesReducer.getLoaded);

const selectTransactions = createSelector(
  selectState,
  LeagueTradesReducer.getTransactions
);

export const LeagueTradesSelectors = {
  selectLoaded,
  selectLoading,
  selectTransactions,
};
