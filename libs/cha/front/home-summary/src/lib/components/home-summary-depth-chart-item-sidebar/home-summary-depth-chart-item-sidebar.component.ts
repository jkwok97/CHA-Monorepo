import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar',
  templateUrl: './home-summary-depth-chart-item-sidebar.component.html',
  styleUrls: ['./home-summary-depth-chart-item-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
