import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './transactions-trades.reducer';
import { TransactionsTradesActions } from './transactions-trades.actions';
import { Observable } from 'rxjs';
import { TransactionsTradesSelectors } from './transactions-trades.selectors';
import { GetTeamTransactionDto } from '@cha/shared/entities';

@Injectable()
export class TransactionsTradesFacade {
  isSaving$: Observable<boolean> = this.store.select(
    TransactionsTradesSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    TransactionsTradesSelectors.selectSaved
  );

  teamOne$: Observable<GetTeamTransactionDto | null> = this.store.select(
    TransactionsTradesSelectors.selectTeamOne
  );

  teamOneLoading$: Observable<boolean> = this.store.select(
    TransactionsTradesSelectors.selectTeamOneLoading
  );

  teamOneLoaded$: Observable<boolean> = this.store.select(
    TransactionsTradesSelectors.selectTeamOneLoaded
  );

  teamTwo$: Observable<GetTeamTransactionDto | null> = this.store.select(
    TransactionsTradesSelectors.selectTeamTwo
  );

  teamTwoLoading$: Observable<boolean> = this.store.select(
    TransactionsTradesSelectors.selectTeamTwoLoading
  );

  teamTwoLoaded$: Observable<boolean> = this.store.select(
    TransactionsTradesSelectors.selectTeamTwoLoaded
  );

  constructor(private store: Store<State>) {}

  getTeamOne(team: string) {
    this.store.dispatch(TransactionsTradesActions.getTeamOne({ team }));
  }

  getTeamTwo(team: string) {
    this.store.dispatch(TransactionsTradesActions.getTeamTwo({ team }));
  }
}
