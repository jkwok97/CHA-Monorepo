import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as DraftMgmtTableReducer from './draft-mgmt-table.reducer';

export const selectState =
  createFeatureSelector<DraftMgmtTableReducer.State>('draft-mgmt-table');

const selectLoading = createSelector(
  selectState,
  DraftMgmtTableReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  DraftMgmtTableReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  DraftMgmtTableReducer.getSaving
);

const selectSaved = createSelector(selectState, DraftMgmtTableReducer.getSaved);

const selectDraftTableItems = createSelector(
  selectState,
  DraftMgmtTableReducer.getDraftTableItems
);

export const DraftMgmtTableSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectDraftTableItems,
};
