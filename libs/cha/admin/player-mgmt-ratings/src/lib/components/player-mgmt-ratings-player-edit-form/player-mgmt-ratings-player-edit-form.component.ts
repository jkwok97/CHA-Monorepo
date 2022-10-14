import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-ratings-player-edit-form',
  templateUrl: './player-mgmt-ratings-player-edit-form.component.html',
  styleUrls: ['./player-mgmt-ratings-player-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsPlayerEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
