import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';
import { LeagueDataFacade } from '@cha/domain/core';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar-ratings',
  templateUrl: './home-summary-depth-chart-item-sidebar-ratings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarRatingsComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
  @Input() isMobile!: boolean;

  isOffSeason$: Observable<boolean>;

  constructor(private leagueDataFacade: LeagueDataFacade) {
    this.isOffSeason$ = this.leagueDataFacade.isOffSeason$;
  }
}
