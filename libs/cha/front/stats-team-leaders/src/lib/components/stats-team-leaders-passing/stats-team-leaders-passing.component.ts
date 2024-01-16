import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { statTeamDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders-passing',
  templateUrl: './stats-team-leaders-passing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersPassingComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'pass_complete', header: 'PC' },
    { field: 'pass_incomplete', header: 'PI' },
    { field: 'pass_pct', header: 'Pass %' },
  ];

  isMobile$: Observable<boolean>;

  constructor(
    private leagueStatsTeamFacade: LeagueStatsTeamFacade,
    private displayFacade: DisplayFacade
  ) {
    this.leagueStatsTeamFacade.leagueTeamPassing$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });

    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
