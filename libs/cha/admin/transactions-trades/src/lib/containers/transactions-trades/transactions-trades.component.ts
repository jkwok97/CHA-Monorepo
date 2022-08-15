import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-admin-transactions-trades',
  templateUrl: './transactions-trades.component.html',
  styleUrls: ['./transactions-trades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTradesComponent {}
