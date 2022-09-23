import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto, TeamDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-ratings',
  templateUrl: './depth-chart-item-sidebar-ratings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarRatingsComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;

  userTeam$: Observable<TeamDto | undefined>;

  constructor(private teamsSummaryFacade: TeamsSummaryFacade) {
    this.userTeam$ = this.teamsSummaryFacade.userTeam$;
  }
}
