import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-ratings-nhl',
  templateUrl: './depth-chart-item-sidebar-ratings-nhl.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarRatingsNhlComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
  @Input() isMobile!: boolean;
}
