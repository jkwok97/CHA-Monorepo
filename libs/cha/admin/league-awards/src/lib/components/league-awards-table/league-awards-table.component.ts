import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-awards-table',
  templateUrl: './league-awards-table.component.html',
  styleUrls: ['./league-awards-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueAwardsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
