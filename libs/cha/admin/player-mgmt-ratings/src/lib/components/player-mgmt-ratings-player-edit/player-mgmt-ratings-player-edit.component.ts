import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-ratings-player-edit',
  templateUrl: './player-mgmt-ratings-player-edit.component.html',
  styleUrls: ['./player-mgmt-ratings-player-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsPlayerEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
