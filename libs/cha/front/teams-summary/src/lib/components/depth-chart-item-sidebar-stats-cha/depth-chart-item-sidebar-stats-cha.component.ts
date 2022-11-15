import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-stats-cha',
  templateUrl: './depth-chart-item-sidebar-stats-cha.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarStatsChaComponent {
  @Input() currentStat: any;
  @Input() isMobile!: boolean;
}
