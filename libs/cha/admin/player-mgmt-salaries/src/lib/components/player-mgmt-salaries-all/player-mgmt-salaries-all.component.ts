import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-salaries-all',
  templateUrl: './player-mgmt-salaries-all.component.html',
  styleUrls: ['./player-mgmt-salaries-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesAllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
