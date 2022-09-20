import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar-ratings',
  templateUrl: './home-summary-depth-chart-item-sidebar-ratings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarRatingsComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
}
