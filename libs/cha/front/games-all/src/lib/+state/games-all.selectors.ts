import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as GamesAllReducer from './games-all.reducer';

export const selectState =
  createFeatureSelector<GamesAllReducer.State>('games-all');

const selectLoading = createSelector(selectState, GamesAllReducer.getLoading);

const selectLoaded = createSelector(selectState, GamesAllReducer.getLoaded);

const selectSchedule = createSelector(selectState, GamesAllReducer.getSchedule);

export const GamesAllSelectors = {
  selectLoaded,
  selectLoading,
  selectSchedule,
};
