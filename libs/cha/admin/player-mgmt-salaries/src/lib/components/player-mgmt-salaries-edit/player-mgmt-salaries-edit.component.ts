import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-salaries-edit',
  templateUrl: './player-mgmt-salaries-edit.component.html',
  styleUrls: ['./player-mgmt-salaries-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
