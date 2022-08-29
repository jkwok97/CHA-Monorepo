import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { statTeamDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders-penalties',
  templateUrl: './stats-team-leaders-penalties.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersPenaltiesComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'penalty_minutes', header: 'PIM' },
    { field: 'pim_game', header: 'PIM/G' },
  ];

  isMobile$: Observable<boolean>;

  constructor(
    private leagueStatsTeamFacade: LeagueStatsTeamFacade,
    private displayFacade: DisplayFacade
  ) {
    this.leagueStatsTeamFacade.leagueTeamPenalties$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });

    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
