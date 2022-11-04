import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as GamesCurrentReducer from './games-current.reducer';

export const selectState =
  createFeatureSelector<GamesCurrentReducer.State>('games-current');

const selectLoading = createSelector(
  selectState,
  GamesCurrentReducer.getLoading
);

const selectLoaded = createSelector(selectState, GamesCurrentReducer.getLoaded);

const selectGames = createSelector(selectState, GamesCurrentReducer.getGames);

const selectBoxScore = createSelector(selectState, GamesCurrentReducer.getGame);

const selectGameLoading = createSelector(
  selectState,
  GamesCurrentReducer.getGameLoading
);

export const GamesCurrentSelectors = {
  selectLoaded,
  selectLoading,
  selectGames,
  selectBoxScore,
  selectGameLoading,
};
