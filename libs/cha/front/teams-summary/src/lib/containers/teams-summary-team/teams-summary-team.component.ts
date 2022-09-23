import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, skip, filter } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';
import { TeamStatsFacade } from '../../+state/team-stats/team-stats.facade';

@Component({
  selector: 'cha-front-teams-summary-team',
  templateUrl: './teams-summary-team.component.html',
  styleUrls: ['./teams-summary-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryTeamComponent implements OnInit {
  userId$: Observable<number | undefined>;

  seasonOption = 'Regular';

  constructor(
    private teamsSummaryFacade: TeamsSummaryFacade,
    private teamStatsFacade: TeamStatsFacade
  ) {
    this.userId$ = this.teamsSummaryFacade.userId$;

    this.userId$
      .pipe(
        skip(1),
        filter((v) => v !== undefined)
      )
      .subscribe((userId) => {
        if (userId) {
          this.teamStatsFacade.getUserTeamStatsBySeason(this.seasonOption);
        }
      });
  }

  ngOnInit(): void {}
}
