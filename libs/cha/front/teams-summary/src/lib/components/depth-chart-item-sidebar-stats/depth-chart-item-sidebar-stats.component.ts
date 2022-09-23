import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-stats',
  templateUrl: './depth-chart-item-sidebar-stats.component.html',
  styleUrls: ['./depth-chart-item-sidebar-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarStatsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
