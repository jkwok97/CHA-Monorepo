import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { statTeamDto } from '@cha/shared/entities';
import { Observable, filter, first } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders-standings',
  templateUrl: './stats-team-leaders-standings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersStandingsComponent {
  teamStandings$: Observable<statTeamDto[]>;

  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'games_played', header: 'GP' },
    { field: 'wins', header: 'W' },
    { field: 'loss', header: 'L' },
    { field: 'ties', header: 'T' },
    { field: 'points', header: 'Pts' },
    { field: 'win_pct', header: 'Win%' },
  ];

  isMobile$: Observable<boolean>;

  constructor(
    private leagueStatsTeamFacade: LeagueStatsTeamFacade,
    private displayFacade: DisplayFacade
  ) {
    this.teamStandings$ = this.leagueStatsTeamFacade.leagueTeamStandings$;

    this.teamStandings$
      .pipe(
        filter((stats: statTeamDto[]) => stats.length > 0),
        first()
      )
      .subscribe((stats: statTeamDto[]) => {
        this.stats = stats;
      });

    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
