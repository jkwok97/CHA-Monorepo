import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as DraftCurrentReducer from './draft-current.reducer';

export const selectState =
  createFeatureSelector<DraftCurrentReducer.State>('draft-current');

const selectDraftTable = createSelector(
  selectState,
  DraftCurrentReducer.getDraftTable
);

const selectLoading = createSelector(
  selectState,
  DraftCurrentReducer.getLoading
);

const selectLoaded = createSelector(selectState, DraftCurrentReducer.getLoaded);

const selectAllTeams = createSelector(
  selectState,
  DraftCurrentReducer.getAllTeams
);

export const DraftCurrentSelectors = {
  selectDraftTable,
  selectLoaded,
  selectLoading,
  selectAllTeams,
};
