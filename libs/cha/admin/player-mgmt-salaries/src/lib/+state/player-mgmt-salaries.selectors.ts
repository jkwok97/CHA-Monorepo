import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as PlayerMgmtSalariesReducer from './player-mgmt-salaries.reducer';

export const selectState =
  createFeatureSelector<PlayerMgmtSalariesReducer.State>(
    'player-mgmt-salaries'
  );

const selectLoading = createSelector(
  selectState,
  PlayerMgmtSalariesReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  PlayerMgmtSalariesReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  PlayerMgmtSalariesReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  PlayerMgmtSalariesReducer.getSaved
);

const selectSalaries = createSelector(
  selectState,
  PlayerMgmtSalariesReducer.getSalaries
);

export const PlayerMgmtSalariesSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectSalaries,
};
