import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-ratings-rate',
  templateUrl: './depth-chart-item-sidebar-ratings-rate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarRatingsRateComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
  @Input() isMobile!: boolean;
}
