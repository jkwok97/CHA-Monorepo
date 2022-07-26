import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, Observable } from 'rxjs';
import { TransactionsTradesFacade } from '../../+state/transactions-trades.facade';

@UntilDestroy()
@Component({
  selector: 'cha-admin-transactions-trades-list-box',
  templateUrl: './transactions-trades-list-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTradesListBoxComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() team!: 'teamOne' | 'teamTwo';
  @Input() options!: any[];

  @Output() optionChanged = new EventEmitter<string>();
  @Output() teamOneChanged = new EventEmitter<any[]>();
  @Output() teamTwoChanged = new EventEmitter<any[]>();

  teamOneLoading$: Observable<boolean>;
  teamTwoLoading$: Observable<boolean>;
  saving$: Observable<boolean>;

  teamOneGrouped!: any[];
  teamTwoGrouped!: any[];
  selectedPlayers!: any[];

  constructor(private transactionsTradesFacade: TransactionsTradesFacade) {
    this.teamOneLoading$ = this.transactionsTradesFacade.teamOneLoading$;
    this.teamTwoLoading$ = this.transactionsTradesFacade.teamTwoLoading$;
    this.saving$ = this.transactionsTradesFacade.isSaving$;
  }

  ngOnInit(): void {
    this.transactionsTradesFacade.teamOne$
      .pipe(
        filter((options) => options.length > 0),
        untilDestroyed(this)
      )
      .subscribe((options) => (this.teamOneGrouped = options));

    this.transactionsTradesFacade.teamTwo$
      .pipe(
        filter((options) => options.length > 0),
        untilDestroyed(this)
      )
      .subscribe((options) => (this.teamTwoGrouped = options));

    this.saving$.pipe(untilDestroyed(this)).subscribe((saving: boolean) => {
      if (!saving) {
        this.selectedPlayers = [];
      }
    });
  }

  onSelectTeam(event: any) {
    this.optionChanged.emit(event.value);

    if (this.team === 'teamOne') {
      this.transactionsTradesFacade.getTeamOne(event.value);
    } else {
      this.transactionsTradesFacade.getTeamTwo(event.value);
    }
  }

  onTransactionSelection(event: any) {
    if (this.team === 'teamOne') {
      this.teamOneChanged.emit(event.value);
    } else {
      this.teamTwoChanged.emit(event.value);
    }
  }
}
