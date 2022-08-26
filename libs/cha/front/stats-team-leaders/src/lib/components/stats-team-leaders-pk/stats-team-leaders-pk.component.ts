import { ChangeDetectionStrategy, Component } from '@angular/core';
import { statTeamDto } from '@cha/shared/entities';
import { first } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders-pk',
  templateUrl: './stats-team-leaders-pk.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersPkComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'pk_attempts', header: 'PKA' },
    { field: 'pk_goals', header: 'PKG' },
    { field: 'pk_pct', header: 'PK%' },
  ];

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.leagueStatsTeamFacade.leagueTeamPk$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });
  }
}
