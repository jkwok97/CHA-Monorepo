import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-ratings-goalie-table',
  templateUrl: './player-mgmt-ratings-goalie-table.component.html',
  styleUrls: ['./player-mgmt-ratings-goalie-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsGoalieTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
