import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { statTeamDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders-shots',
  templateUrl: './stats-team-leaders-shots.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersShotsComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'shots_for', header: 'SF' },
    { field: 'shots_against', header: 'SA' },
    { field: 'shots_diff', header: 'Shot Diff' },
  ];

  isMobile$: Observable<boolean>;

  constructor(
    private leagueStatsTeamFacade: LeagueStatsTeamFacade,
    private displayFacade: DisplayFacade
  ) {
    this.leagueStatsTeamFacade.leagureTeamShotDiff$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });

    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
