import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-users-table',
  templateUrl: './league-users-table.component.html',
  styleUrls: ['./league-users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueUsersTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
