import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-transaction-trades-buttons',
  templateUrl: './transaction-trades-buttons.component.html',
  styleUrls: ['./transaction-trades-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionTradesButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
