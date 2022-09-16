import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HomeSummaryReducer from './home-summary.reducer';

export const selectState =
  createFeatureSelector<HomeSummaryReducer.State>('home-summary');

const selectLoading = createSelector(
  selectState,
  HomeSummaryReducer.getLoading
);

const selectLoaded = createSelector(selectState, HomeSummaryReducer.getLoaded);

const selectTeamRecord = createSelector(
  selectState,
  HomeSummaryReducer.getTeamRecord
);

export const HomeSummarySelectors = {
  selectLoaded,
  selectLoading,
  selectTeamRecord,
};
