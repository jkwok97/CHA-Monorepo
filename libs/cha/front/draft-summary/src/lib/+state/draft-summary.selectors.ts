import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as DraftSummaryReducer from './draft-summary.reducer';

export const selectState =
  createFeatureSelector<DraftSummaryReducer.State>('draft-summary');

const selectDraftPicks = createSelector(
  selectState,
  DraftSummaryReducer.getDraftPicks
);

const selectLoading = createSelector(
  selectState,
  DraftSummaryReducer.getLoading
);

const selectLoaded = createSelector(selectState, DraftSummaryReducer.getLoaded);

export const DraftSummarySelectors = {
  selectDraftPicks,
  selectLoaded,
  selectLoading,
};
