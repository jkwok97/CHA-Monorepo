import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TransactionsTradesFacade } from '../../+state/transactions-trades.facade';

@Component({
  selector: 'cha-admin-transaction-trades-buttons',
  templateUrl: './transaction-trades-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionTradesButtonsComponent implements OnChanges {
  @Input() isMobile!: boolean;
  @Input() teamOne!: string;
  @Input() teamTwo!: string;
  @Input() teamOnePicks!: string[];
  @Input() teamTwoPicks!: string[];

  setTrade = true;

  constructor(private transactionsTradesFacade: TransactionsTradesFacade) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['teamTwo']) {
      if (changes['teamTwo']?.currentValue === 'FA') {
        this.setTrade = false;
      } else if (changes['teamTwo']?.currentValue !== 'FA') {
        this.setTrade = true;
      }
    }
  }

  onAcquire(): void {
    this.transactionsTradesFacade.setWaiverAcquisition(
      this.teamOne,
      this.teamTwoPicks
    );
  }

  onRelease(): void {
    this.transactionsTradesFacade.setWaiverRelease(
      this.teamOne,
      this.teamOnePicks
    );
  }

  onTrade(): void {
    this.transactionsTradesFacade.setTrade(
      this.teamOne,
      this.teamTwo,
      this.teamOnePicks,
      this.teamTwoPicks
    );
  }
}
