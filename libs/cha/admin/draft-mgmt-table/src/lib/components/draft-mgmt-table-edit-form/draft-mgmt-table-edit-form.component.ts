import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-draft-mgmt-table-edit-form',
  templateUrl: './draft-mgmt-table-edit-form.component.html',
  styleUrls: ['./draft-mgmt-table-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtTableEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
