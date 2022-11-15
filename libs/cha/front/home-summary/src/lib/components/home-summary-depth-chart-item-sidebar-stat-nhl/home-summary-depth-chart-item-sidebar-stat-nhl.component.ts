import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar-stat-nhl',
  templateUrl:
    './home-summary-depth-chart-item-sidebar-stat-nhl.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarStatNhlComponent {
  @Input() nhlStat: any;
}
