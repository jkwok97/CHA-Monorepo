import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-teams-stats-table',
  templateUrl: './teams-stats-table.component.html',
  styleUrls: ['./teams-stats-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsStatsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
