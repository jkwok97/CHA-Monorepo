import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as PlayerMgmtPlayerCurrentReducer from './player-mgmt-player-current.reducer';

export const selectState =
  createFeatureSelector<PlayerMgmtPlayerCurrentReducer.State>(
    'player-mgmt-player-current'
  );

const selectLoading = createSelector(
  selectState,
  PlayerMgmtPlayerCurrentReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  PlayerMgmtPlayerCurrentReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  PlayerMgmtPlayerCurrentReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  PlayerMgmtPlayerCurrentReducer.getSaved
);

const selectPlayers = createSelector(
  selectState,
  PlayerMgmtPlayerCurrentReducer.getPlayers
);

const selectPlayer = createSelector(
  selectState,
  PlayerMgmtPlayerCurrentReducer.getPlayer
);

export const PlayerMgmtPlayerCurrentSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectPlayers,
  selectPlayer,
};
