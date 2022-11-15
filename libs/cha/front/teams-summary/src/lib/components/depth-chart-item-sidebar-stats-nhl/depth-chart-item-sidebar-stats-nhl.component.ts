import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-stats-nhl',
  templateUrl: './depth-chart-item-sidebar-stats-nhl.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarStatsNhlComponent {
  @Input() nhlStat: any;
  @Input() isMobile!: boolean;
}
