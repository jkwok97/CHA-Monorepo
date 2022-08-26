import { ChangeDetectionStrategy, Component } from '@angular/core';
import { statTeamDto } from '@cha/shared/entities';
import { first } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders-pp',
  templateUrl: './stats-team-leaders-pp.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersPpComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'pp_attempts', header: 'PPA' },
    { field: 'pp_goals', header: 'PPG' },
    { field: 'pp_pct', header: 'PP%' },
  ];

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.leagueStatsTeamFacade.leagueTeamPp$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });
  }
}
