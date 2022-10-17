import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-goalie-current-table',
  templateUrl: './player-mgmt-goalie-current-table.component.html',
  styleUrls: ['./player-mgmt-goalie-current-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtGoalieCurrentTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
