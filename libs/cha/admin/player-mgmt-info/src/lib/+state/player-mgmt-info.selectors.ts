import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as PlayerMgmtInfoReducer from './player-mgmt-info.reducer';

export const selectState =
  createFeatureSelector<PlayerMgmtInfoReducer.State>('player-mgmt-info');

const selectLoading = createSelector(
  selectState,
  PlayerMgmtInfoReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  PlayerMgmtInfoReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  PlayerMgmtInfoReducer.getSaving
);

const selectSaved = createSelector(selectState, PlayerMgmtInfoReducer.getSaved);

const selectPlayers = createSelector(
  selectState,
  PlayerMgmtInfoReducer.getPlayers
);

export const PlayerMgmtInfoSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectPlayers,
};
