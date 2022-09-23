import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-goalie-stats-table',
  templateUrl: './goalie-stats-table.component.html',
  styleUrls: ['./goalie-stats-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalieStatsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
