import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';
import { LeagueDataFacade } from '@cha/domain/core';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-ratings',
  templateUrl: './depth-chart-item-sidebar-ratings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarRatingsComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
  @Input() isMobile!: boolean;

  isOffSeason$: Observable<boolean>;

  constructor(private leagueDataFacade: LeagueDataFacade) {
    this.isOffSeason$ = this.leagueDataFacade.isOffSeason$;
  }
}
