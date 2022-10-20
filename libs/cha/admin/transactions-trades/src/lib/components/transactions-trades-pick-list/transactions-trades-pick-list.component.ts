import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetTeamTransactionDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { TransactionsTradesFacade } from '../../+state/transactions-trades.facade';

@Component({
  selector: 'cha-admin-transactions-trades-pick-list',
  templateUrl: './transactions-trades-pick-list.component.html',
  styleUrls: ['./transactions-trades-pick-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTradesPickListComponent {}
