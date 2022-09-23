import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-goalie-stats-table-sider',
  templateUrl: './goalie-stats-table-sider.component.html',
  styleUrls: ['./goalie-stats-table-sider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalieStatsTableSiderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
