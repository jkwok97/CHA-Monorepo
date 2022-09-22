import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HomeAwardsReducer from './home-awards.reducer';

export const selectState =
  createFeatureSelector<HomeAwardsReducer.State>('home-awards');

const selectLoading = createSelector(selectState, HomeAwardsReducer.getLoading);

const selectLoaded = createSelector(selectState, HomeAwardsReducer.getLoaded);

const selectAll = createSelector(selectState, HomeAwardsReducer.getAllAwards);

export const HomeAwardsSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
};
