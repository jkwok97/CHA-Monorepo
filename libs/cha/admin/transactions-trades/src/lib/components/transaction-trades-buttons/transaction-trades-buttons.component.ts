import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay, Observable } from 'rxjs';
import { TransactionsTradesFacade } from '../../+state/transactions-trades.facade';

@UntilDestroy()
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

  saving$: Observable<boolean>;

  setTrade = true;

  constructor(private transactionsTradesFacade: TransactionsTradesFacade) {
    this.saving$ = this.transactionsTradesFacade.isSaving$;
  }

  ngOnChanges(changes: SimpleChanges): void {
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

    this.saving$
      .pipe(untilDestroyed(this), delay(500))
      .subscribe((saving: boolean) => {
        if (!saving) {
          this.transactionsTradesFacade.getTeamOne(this.teamOne);
          this.transactionsTradesFacade.getTeamTwo(this.teamTwo);
        }
      });
  }

  onRelease(): void {
    this.transactionsTradesFacade.setWaiverRelease(
      this.teamOne,
      this.teamOnePicks
    );

    this.saving$
      .pipe(untilDestroyed(this), delay(500))
      .subscribe((saving: boolean) => {
        if (!saving) {
          this.transactionsTradesFacade.getTeamOne(this.teamOne);
          this.transactionsTradesFacade.getTeamTwo(this.teamTwo);
        }
      });
  }

  onTrade(): void {
    this.transactionsTradesFacade.setTrade(
      this.teamOne,
      this.teamTwo,
      this.teamOnePicks,
      this.teamTwoPicks
    );

    this.saving$
      .pipe(untilDestroyed(this), delay(500))
      .subscribe((saving: boolean) => {
        if (!saving) {
          this.transactionsTradesFacade.getTeamOne(this.teamOne);
          this.transactionsTradesFacade.getTeamTwo(this.teamTwo);
        }
      });
  }
}
