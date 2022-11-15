import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-ratings',
  templateUrl: './depth-chart-item-sidebar-ratings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarRatingsComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
  @Input() isMobile!: boolean;
}
