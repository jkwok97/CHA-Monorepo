import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-trades.reducer';
import { LeagueTradesActions } from './league-trades.actions';
import { Observable } from 'rxjs';
import { LeagueTradesSelectors } from './league-trades.selectors';
import { GetTransactionDto } from '@cha/shared/entities';

@Injectable()
export class LeagueTradesFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueTradesSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueTradesSelectors.selectLoaded
  );

  transactions$: Observable<GetTransactionDto[]> = this.store.select(
    LeagueTradesSelectors.selectFilteredTrades
  );

  constructor(private store: Store<State>) {}

  getTransactions(season: string) {
    this.store.dispatch(LeagueTradesActions.getTrades({ season }));
  }

  updateFilter(filter: string) {
    this.store.dispatch(LeagueTradesActions.filterTrades({ filter }));
  }
}
