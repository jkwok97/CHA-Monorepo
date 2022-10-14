import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-ratings-goalie-edit-form',
  templateUrl: './player-mgmt-ratings-goalie-edit-form.component.html',
  styleUrls: ['./player-mgmt-ratings-goalie-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsGoalieEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
