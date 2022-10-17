import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-player-current-edit-form',
  templateUrl: './player-mgmt-player-current-edit-form.component.html',
  styleUrls: ['./player-mgmt-player-current-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtPlayerCurrentEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
