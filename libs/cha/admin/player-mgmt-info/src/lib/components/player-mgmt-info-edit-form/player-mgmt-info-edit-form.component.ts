import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-info-edit-form',
  templateUrl: './player-mgmt-info-edit-form.component.html',
  styleUrls: ['./player-mgmt-info-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
