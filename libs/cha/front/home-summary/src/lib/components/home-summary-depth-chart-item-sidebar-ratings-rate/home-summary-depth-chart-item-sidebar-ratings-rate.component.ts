import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar-ratings-rate',
  templateUrl:
    './home-summary-depth-chart-item-sidebar-ratings-rate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarRatingsRateComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
}
