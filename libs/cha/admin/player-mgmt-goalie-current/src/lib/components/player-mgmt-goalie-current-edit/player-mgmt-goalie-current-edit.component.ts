import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-goalie-current-edit',
  templateUrl: './player-mgmt-goalie-current-edit.component.html',
  styleUrls: ['./player-mgmt-goalie-current-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtGoalieCurrentEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
