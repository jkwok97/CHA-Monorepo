import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-transactions-trades-pick-list',
  templateUrl: './transactions-trades-pick-list.component.html',
  styleUrls: ['./transactions-trades-pick-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTradesPickListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
