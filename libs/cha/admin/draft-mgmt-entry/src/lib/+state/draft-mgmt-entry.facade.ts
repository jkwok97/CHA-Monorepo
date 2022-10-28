import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './draft-mgmt-entry.reducer';
import { DraftMgmtEntryActions } from './draft-mgmt-entry.actions';
import { Observable } from 'rxjs';
import { DraftMgmtEntrySelectors } from './draft-mgmt-entry.selectors';
import {
  CreateDraftPickDto,
  DraftPickDto,
  PlayerDto,
} from '@cha/shared/entities';

@Injectable()
export class DraftMgmtEntryFacade {
  isLoading$: Observable<boolean> = this.store.select(
    DraftMgmtEntrySelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    DraftMgmtEntrySelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    DraftMgmtEntrySelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    DraftMgmtEntrySelectors.selectSaved
  );

  picks$: Observable<DraftPickDto[]> = this.store.select(
    DraftMgmtEntrySelectors.selectPicks
  );

  players$: Observable<PlayerDto[]> = this.store.select(
    DraftMgmtEntrySelectors.selectPlayers
  );

  playerOptions$: Observable<any[]> = this.store.select(
    DraftMgmtEntrySelectors.selectPlayerOptions
  );

  teamOptions$: Observable<any[]> = this.store.select(
    DraftMgmtEntrySelectors.selectTeamsOptionsById
  );

  constructor(private store: Store<State>) {}

  getPicks() {
    this.store.dispatch(DraftMgmtEntryActions.getDraftPicks());
  }

  getPlayers() {
    this.store.dispatch(DraftMgmtEntryActions.getPlayers());
  }

  getTeams() {
    this.store.dispatch(DraftMgmtEntryActions.getTeams());
  }

  addPick(pick: CreateDraftPickDto) {
    this.store.dispatch(DraftMgmtEntryActions.addDraftPick({ pick }));
  }

  editPick(pick: DraftPickDto) {
    this.store.dispatch(DraftMgmtEntryActions.editDraftPick({ pick }));
  }

  deletePick(pickId: number) {
    this.store.dispatch(DraftMgmtEntryActions.deleteDraftPick({ pickId }));
  }
}
