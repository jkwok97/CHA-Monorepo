import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-transactions-waivers-order-list',
  templateUrl: './transactions-waivers-order-list.component.html',
  styleUrls: ['./transactions-waivers-order-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsWaiversOrderListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
