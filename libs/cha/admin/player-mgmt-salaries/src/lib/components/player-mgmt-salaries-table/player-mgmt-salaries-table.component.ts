import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-salaries-table',
  templateUrl: './player-mgmt-salaries-table.component.html',
  styleUrls: ['./player-mgmt-salaries-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
