import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './draft-mgmt-entry.reducer';
import { DraftMgmtEntryActions } from './draft-mgmt-entry.actions';
import { Observable } from 'rxjs';
import { DraftMgmtEntrySelectors } from './draft-mgmt-entry.selectors';
import { CreateDraftPickDto, DraftPickDto } from '@cha/shared/entities';

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

  constructor(private store: Store<State>) {}

  getPicks() {
    this.store.dispatch(DraftMgmtEntryActions.getDraftPicks());
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
