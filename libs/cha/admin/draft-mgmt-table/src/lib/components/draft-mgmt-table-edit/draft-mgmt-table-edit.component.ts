import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-draft-mgmt-table-edit',
  templateUrl: './draft-mgmt-table-edit.component.html',
  styleUrls: ['./draft-mgmt-table-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtTableEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
