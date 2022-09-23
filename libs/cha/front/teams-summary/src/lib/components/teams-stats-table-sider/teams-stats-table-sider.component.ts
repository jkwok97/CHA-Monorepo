import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-teams-stats-table-sider',
  templateUrl: './teams-stats-table-sider.component.html',
  styleUrls: ['./teams-stats-table-sider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsStatsTableSiderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
