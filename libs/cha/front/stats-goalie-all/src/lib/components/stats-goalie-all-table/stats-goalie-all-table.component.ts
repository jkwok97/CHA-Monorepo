import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-stats-goalie-all-table',
  templateUrl: './stats-goalie-all-table.component.html',
  styleUrls: ['./stats-goalie-all-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsGoalieAllTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
