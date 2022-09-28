import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TeamDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@Component({
  selector: 'cha-front-teams-summary-salaries',
  templateUrl: './teams-summary-salaries.component.html',
  styleUrls: ['./teams-summary-salaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummarySalariesComponent {
  userTeam$: Observable<TeamDto | undefined>;
  isLoading$: Observable<boolean>;

  constructor(private teamsSummaryFacade: TeamsSummaryFacade) {
    this.userTeam$ = this.teamsSummaryFacade.userTeam$;
    this.isLoading$ = this.teamsSummaryFacade.playerSalaryLoading$;
  }
}
