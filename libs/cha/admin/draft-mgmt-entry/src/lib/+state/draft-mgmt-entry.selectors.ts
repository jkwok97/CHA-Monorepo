import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as DraftMgmtEntryReducer from './draft-mgmt-entry.reducer';

export const selectState =
  createFeatureSelector<DraftMgmtEntryReducer.State>('draft-mgmt-entry');

const selectLoading = createSelector(
  selectState,
  DraftMgmtEntryReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  DraftMgmtEntryReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  DraftMgmtEntryReducer.getSaving
);

const selectSaved = createSelector(selectState, DraftMgmtEntryReducer.getSaved);

const selectPicks = createSelector(selectState, DraftMgmtEntryReducer.getPicks);

export const DraftMgmtEntrySelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectPicks,
};
