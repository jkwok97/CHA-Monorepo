import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar-stat-cha',
  templateUrl:
    './home-summary-depth-chart-item-sidebar-stat-cha.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarStatChaComponent {
  @Input() currentStat: any;
}
