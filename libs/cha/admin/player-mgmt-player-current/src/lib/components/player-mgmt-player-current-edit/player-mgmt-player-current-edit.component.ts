import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-player-current-edit',
  templateUrl: './player-mgmt-player-current-edit.component.html',
  styleUrls: ['./player-mgmt-player-current-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtPlayerCurrentEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
