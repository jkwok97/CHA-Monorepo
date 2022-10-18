import { WaiversDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as TransactionsWaiversReducer from './transactions-waivers.reducer';

export const selectState =
  createFeatureSelector<TransactionsWaiversReducer.State>(
    'transactions-waivers'
  );

const selectLoading = createSelector(
  selectState,
  TransactionsWaiversReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  TransactionsWaiversReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  TransactionsWaiversReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  TransactionsWaiversReducer.getSaved
);

const selectWaivers = createSelector(
  selectState,
  TransactionsWaiversReducer.getWaivers
);

const selectWaiversSorted = createSelector(
  selectWaivers,
  (waivers: WaiversDto[]) =>
    waivers
      .filter((waiver: WaiversDto) => waiver.id !== null)
      .sort(
        (a: WaiversDto, b: WaiversDto) => a.priority_number - b.priority_number
      )
);

export const TransactionsWaiversSelectors = {
  selectLoaded,
  selectLoading,
  selectWaivers,
  selectWaiversSorted,
  selectSaving,
  selectSaved,
};
