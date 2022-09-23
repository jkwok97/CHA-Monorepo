import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, skip, filter } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';
import { TeamStatsFacade } from '../../+state/team-stats/team-stats.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-teams-summary-team',
  templateUrl: './teams-summary-team.component.html',
  styleUrls: ['./teams-summary-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryTeamComponent implements OnInit {
  user$: Observable<UserDto | undefined>;

  seasonOption = 'Regular';

  constructor(
    private teamsSummaryFacade: TeamsSummaryFacade,
    private teamStatsFacade: TeamStatsFacade
  ) {
    this.user$ = this.teamsSummaryFacade.user$;

    this.user$
      .pipe(
        skip(1),
        filter((v) => v !== undefined),
        untilDestroyed(this)
      )
      .subscribe((user: UserDto | undefined) => {
        if (user) {
          this.teamStatsFacade.getUserTeamStatsBySeason(this.seasonOption);
        }
      });
  }

  ngOnInit(): void {}
}
