import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-players-stats-table-sider',
  templateUrl: './players-stats-table-sider.component.html',
  styleUrls: ['./players-stats-table-sider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersStatsTableSiderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
