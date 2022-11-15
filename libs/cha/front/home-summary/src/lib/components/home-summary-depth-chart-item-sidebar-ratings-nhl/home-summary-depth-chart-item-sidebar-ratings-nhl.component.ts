import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar-ratings-nhl',
  templateUrl:
    './home-summary-depth-chart-item-sidebar-ratings-nhl.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarRatingsNhlComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
}
