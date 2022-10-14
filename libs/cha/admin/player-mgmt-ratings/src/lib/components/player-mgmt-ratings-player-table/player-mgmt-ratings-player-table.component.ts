import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-ratings-player-table',
  templateUrl: './player-mgmt-ratings-player-table.component.html',
  styleUrls: ['./player-mgmt-ratings-player-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsPlayerTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
