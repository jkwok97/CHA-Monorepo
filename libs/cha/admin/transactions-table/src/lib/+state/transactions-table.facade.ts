import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './transactions-table.reducer';
import { TransactionsTableActions } from './transactions-table.actions';
import { Observable } from 'rxjs';
import { TransactionsTableSelectors } from './transactions-table.selectors';

@Injectable()
export class TransactionsTableFacade {
  isSaving$: Observable<boolean> = this.store.select(
    TransactionsTableSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    TransactionsTableSelectors.selectSaved
  );

  loading$: Observable<boolean> = this.store.select(
    TransactionsTableSelectors.selectLoading
  );

  loaded$: Observable<boolean> = this.store.select(
    TransactionsTableSelectors.selectLoaded
  );

  trades$: Observable<any[]> = this.store.select(
    TransactionsTableSelectors.selectTrades
  );

  constructor(private store: Store<State>) {}

  getTrades() {
    this.store.dispatch(TransactionsTableActions.get());
  }

  reset() {
    this.store.dispatch(TransactionsTableActions.reset());
  }
}
