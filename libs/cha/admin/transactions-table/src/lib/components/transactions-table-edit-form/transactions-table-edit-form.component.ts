import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-transactions-table-edit-form',
  templateUrl: './transactions-table-edit-form.component.html',
  styleUrls: ['./transactions-table-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
