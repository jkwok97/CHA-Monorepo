import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-conferences-table',
  templateUrl: './league-conferences-table.component.html',
  styleUrls: ['./league-conferences-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueConferencesTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
