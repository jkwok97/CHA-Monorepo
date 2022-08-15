import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-admin-main-transactions',
  templateUrl: './main-transactions.component.html',
  styleUrls: ['./main-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTransactionsComponent {}
