import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as PlayerMgmtRatingsReducer from './player-mgmt-ratings.reducer';

export const selectState =
  createFeatureSelector<PlayerMgmtRatingsReducer.State>('player-mgmt-ratings');

const selectLoading = createSelector(
  selectState,
  PlayerMgmtRatingsReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  PlayerMgmtRatingsReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  PlayerMgmtRatingsReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  PlayerMgmtRatingsReducer.getSaved
);

const selectPlayers = createSelector(
  selectState,
  PlayerMgmtRatingsReducer.getPlayers
);

const selectPlayer = createSelector(
  selectState,
  PlayerMgmtRatingsReducer.getPlayer
);

const selectGoalies = createSelector(
  selectState,
  PlayerMgmtRatingsReducer.getGoalies
);

const selectGoalie = createSelector(
  selectState,
  PlayerMgmtRatingsReducer.getGoalie
);

export const PlayerMgmtRatingsSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectPlayers,
  selectPlayer,
  selectGoalies,
  selectGoalie,
};
