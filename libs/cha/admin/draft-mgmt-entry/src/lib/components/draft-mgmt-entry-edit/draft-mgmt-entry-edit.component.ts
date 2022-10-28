import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-draft-mgmt-entry-edit',
  templateUrl: './draft-mgmt-entry-edit.component.html',
  styleUrls: ['./draft-mgmt-entry-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtEntryEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
