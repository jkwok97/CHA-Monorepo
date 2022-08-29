import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { statTeamDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders-differentials',
  templateUrl: './stats-team-leaders-differentials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersDifferentialsComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'goals_for', header: 'GF' },
    { field: 'goals_against', header: 'GA' },
    { field: 'goals_diff', header: 'Goal Diff' },
  ];

  isMobile$: Observable<boolean>;

  constructor(
    private leagueStatsTeamFacade: LeagueStatsTeamFacade,
    private displayFacade: DisplayFacade
  ) {
    this.leagueStatsTeamFacade.leagueTeamGoalDiff$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });

    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
