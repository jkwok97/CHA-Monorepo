import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './draft-mgmt-table.reducer';
import { DraftMgmtTableActions } from './draft-mgmt-table.actions';
import { Observable } from 'rxjs';
import { DraftMgmtTableSelectors } from './draft-mgmt-table.selectors';
import { DraftTableDto } from '@cha/shared/entities';

@Injectable()
export class DraftMgmtTableFacade {
  isLoading$: Observable<boolean> = this.store.select(
    DraftMgmtTableSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    DraftMgmtTableSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    DraftMgmtTableSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    DraftMgmtTableSelectors.selectSaved
  );

  draftTableItems$: Observable<boolean> = this.store.select(
    DraftMgmtTableSelectors.selectSaved
  );

  constructor(private store: Store<State>) {}

  getDraftTable() {
    this.store.dispatch(DraftMgmtTableActions.getDraftTable());
  }

  editPick(draftTableItem: DraftTableDto) {
    this.store.dispatch(
      DraftMgmtTableActions.editDraftPick({ draftTableItem })
    );
  }
}
