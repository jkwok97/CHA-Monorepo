import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HomeFranchiseReducer from './home-franchise.reducer';

export const selectState =
  createFeatureSelector<HomeFranchiseReducer.State>('home-franchise');

const selectLoading = createSelector(
  selectState,
  HomeFranchiseReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  HomeFranchiseReducer.getLoaded
);

const selectAll = createSelector(selectState, HomeFranchiseReducer.getAllStats);

export const HomeFranchiseSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
};
