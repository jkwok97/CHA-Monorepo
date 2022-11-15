import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar-stats',
  templateUrl: './home-summary-depth-chart-item-sidebar-stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarStatsComponent {
  @Input() currentStat: any;
  @Input() nhlStat: any;
  @Input() isMobile!: boolean;
}
