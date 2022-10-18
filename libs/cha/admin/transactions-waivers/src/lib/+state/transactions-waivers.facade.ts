import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './transactions-waivers.reducer';
import { TransactionsWaiversActions } from './transactions-waivers.actions';
import { Observable } from 'rxjs';
import { TransactionsWaiversSelectors } from './transactions-waivers.selectors';
import { WaiversDto } from '@cha/shared/entities';

@Injectable()
export class TransactionsWaiversFacade {
  isLoading$: Observable<boolean> = this.store.select(
    TransactionsWaiversSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    TransactionsWaiversSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    TransactionsWaiversSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    TransactionsWaiversSelectors.selectSaved
  );

  waivers$: Observable<WaiversDto[]> = this.store.select(
    TransactionsWaiversSelectors.selectWaiversSorted
  );

  constructor(private store: Store<State>) {}

  getWaivers() {
    this.store.dispatch(TransactionsWaiversActions.getWaivers());
  }

  updateWaiverPriority(teams: WaiversDto[]) {
    this.store.dispatch(TransactionsWaiversActions.updateWaiver({ teams }));
  }
}
