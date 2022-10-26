import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { first } from 'rxjs';
import { TransactionsTradesFacade } from '../../+state/transactions-trades.facade';

@Component({
  selector: 'cha-admin-transactions-trades',
  templateUrl: './transactions-trades.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTradesComponent implements OnDestroy {
  isMobile!: boolean;

  constructor(
    private displayFacade: DisplayFacade,
    private transactionsTradesFacade: TransactionsTradesFacade
  ) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnDestroy(): void {
    this.transactionsTradesFacade.reset();
  }
}
