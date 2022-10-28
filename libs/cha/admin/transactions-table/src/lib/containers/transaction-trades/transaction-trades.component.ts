import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable, first } from 'rxjs';
import { TransactionsTableFacade } from '../../+state/transactions-table.facade';

@Component({
  selector: 'cha-admin-transaction-trades',
  templateUrl: './transaction-trades.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionTradesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  trades$: Observable<any[]>;

  isMobile!: boolean;

  constructor(
    private transactionsTableFacade: TransactionsTableFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.transactionsTableFacade.loaded$;
    this.isLoading$ = this.transactionsTableFacade.loading$;
    this.trades$ = this.transactionsTableFacade.trades$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.transactionsTableFacade.getTrades();
  }
}
