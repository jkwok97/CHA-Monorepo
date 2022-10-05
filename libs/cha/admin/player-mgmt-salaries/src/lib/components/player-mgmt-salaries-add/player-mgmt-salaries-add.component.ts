import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-salaries-add',
  templateUrl: './player-mgmt-salaries-add.component.html',
  styleUrls: ['./player-mgmt-salaries-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
