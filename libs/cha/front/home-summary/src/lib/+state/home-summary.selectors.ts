import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HomeSummaryReducer from './home-summary.reducer';

export const selectState =
  createFeatureSelector<HomeSummaryReducer.State>('home-summary');

const selectTeamRecordLoading = createSelector(
  selectState,
  HomeSummaryReducer.getTeamRecordLoading
);

const selectTeamRecordLoaded = createSelector(
  selectState,
  HomeSummaryReducer.getTeamRecordLoaded
);

const selectTeamRecord = createSelector(
  selectState,
  HomeSummaryReducer.getTeamRecord
);

export const HomeSummarySelectors = {
  selectTeamRecordLoading,
  selectTeamRecordLoaded,
  selectTeamRecord,
};
