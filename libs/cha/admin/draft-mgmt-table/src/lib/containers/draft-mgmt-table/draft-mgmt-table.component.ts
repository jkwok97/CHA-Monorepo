import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-draft-mgmt-table',
  templateUrl: './draft-mgmt-table.component.html',
  styleUrls: ['./draft-mgmt-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
