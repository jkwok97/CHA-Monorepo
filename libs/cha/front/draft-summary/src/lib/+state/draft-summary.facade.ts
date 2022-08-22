import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './draft-summary.reducer';
import { DraftSummaryActions } from './draft-summary.actions';
import { DraftSummarySelectors } from './draft-summary.selectors';
import { DraftPickDto } from '@cha/shared/entities';

@Injectable()
export class DraftSummaryFacade {
  isLoading$: Observable<boolean> = this.store.select(
    DraftSummarySelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    DraftSummarySelectors.selectLoaded
  );

  draftPicks$: Observable<DraftPickDto[]> = this.store.select(
    DraftSummarySelectors.selectDraftPicks
  );

  constructor(private store: Store<State>) {}

  getDraftPicks() {
    this.store.dispatch(DraftSummaryActions.getDraftPicks());
  }
}
