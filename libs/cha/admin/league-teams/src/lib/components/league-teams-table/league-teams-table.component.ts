import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-teams-table',
  templateUrl: './league-teams-table.component.html',
  styleUrls: ['./league-teams-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
