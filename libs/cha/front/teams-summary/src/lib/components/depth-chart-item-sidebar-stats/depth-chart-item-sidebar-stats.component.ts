import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TeamDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-stats',
  templateUrl: './depth-chart-item-sidebar-stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarStatsComponent {
  @Input() currentStat: any;
  @Input() nhlStat: any;
  @Input() isMobile!: boolean;

  userTeam$: Observable<TeamDto | undefined>;

  constructor(private teamsSummaryFacade: TeamsSummaryFacade) {
    this.userTeam$ = this.teamsSummaryFacade.userTeam$;
  }
}
