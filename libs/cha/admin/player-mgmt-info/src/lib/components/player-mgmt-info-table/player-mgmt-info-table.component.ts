import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-info-table',
  templateUrl: './player-mgmt-info-table.component.html',
  styleUrls: ['./player-mgmt-info-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
