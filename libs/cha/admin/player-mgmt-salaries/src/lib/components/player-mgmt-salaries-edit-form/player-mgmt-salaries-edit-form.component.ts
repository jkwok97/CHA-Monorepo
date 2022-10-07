import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-salaries-edit-form',
  templateUrl: './player-mgmt-salaries-edit-form.component.html',
  styleUrls: ['./player-mgmt-salaries-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
