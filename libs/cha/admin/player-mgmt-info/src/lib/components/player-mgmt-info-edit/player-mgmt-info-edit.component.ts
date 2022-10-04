import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-info-edit',
  templateUrl: './player-mgmt-info-edit.component.html',
  styleUrls: ['./player-mgmt-info-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
