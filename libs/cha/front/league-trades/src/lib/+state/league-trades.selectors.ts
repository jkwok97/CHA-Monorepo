import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as GamesCurrentReducer from './league-trades.reducer';

export const selectState =
  createFeatureSelector<GamesCurrentReducer.State>('games-current');

const selectLoading = createSelector(
  selectState,
  GamesCurrentReducer.getLoading
);

const selectLoaded = createSelector(selectState, GamesCurrentReducer.getLoaded);

const selectGames = createSelector(selectState, GamesCurrentReducer.getGames);

export const GamesCurrentSelectors = {
  selectLoaded,
  selectLoading,
  selectGames,
};
