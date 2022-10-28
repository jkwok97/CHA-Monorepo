import { PlayerDto } from '@cha/shared/entities';
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

const selectPlayers = createSelector(selectState, DraftMgmtEntryReducer.getPlayers);

const selectPlayerOptions = createSelector(
  selectPlayers,
  (players: PlayerDto[]) =>
    players.map((player: PlayerDto) => ({
      value: player.id,
      label: `${player.firstname} ${player.lastname}`,
    }))
);

export const DraftMgmtEntrySelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectPicks,
  selectPlayers,
  selectPlayerOptions
};
