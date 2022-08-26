import { ChangeDetectionStrategy, Component } from '@angular/core';
import { statTeamDto } from '@cha/shared/entities';
import { first } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders-streak',
  templateUrl: './stats-team-leaders-streak.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersStreakComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'long_win_streak', header: 'Games' },
  ];

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.leagueStatsTeamFacade.leagueTeamWinningStreak$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });
  }
}
