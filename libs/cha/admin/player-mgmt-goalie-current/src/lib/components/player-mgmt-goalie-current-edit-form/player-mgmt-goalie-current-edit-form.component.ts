import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-goalie-current-edit-form',
  templateUrl: './player-mgmt-goalie-current-edit-form.component.html',
  styleUrls: ['./player-mgmt-goalie-current-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtGoalieCurrentEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
