import { GamesDto } from '@cha/shared/entities';
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

const selectGamesGrouped = createSelector(
  selectGames,
  (games: GamesDto[]) =>
    [
      games.reduce(
        (result: any, item: GamesDto) => ({
          ...result,
          [item.gameDay]: [...(result[item.gameDay] || []), item],
        }),
        {}
      ),
    ][0]
);

export const GamesCurrentSelectors = {
  selectLoaded,
  selectLoading,
  selectGames,
  selectGamesGrouped,
};
