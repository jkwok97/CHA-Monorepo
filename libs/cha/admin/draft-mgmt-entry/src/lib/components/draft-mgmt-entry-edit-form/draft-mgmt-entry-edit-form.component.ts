import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-draft-mgmt-entry-edit-form',
  templateUrl: './draft-mgmt-entry-edit-form.component.html',
  styleUrls: ['./draft-mgmt-entry-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtEntryEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
