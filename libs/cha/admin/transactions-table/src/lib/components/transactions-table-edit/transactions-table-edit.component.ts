import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-transactions-table-edit',
  templateUrl: './transactions-table-edit.component.html',
  styleUrls: ['./transactions-table-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
