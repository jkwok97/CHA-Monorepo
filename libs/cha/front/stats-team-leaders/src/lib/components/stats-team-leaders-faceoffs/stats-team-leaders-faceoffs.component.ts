import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { statTeamDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders-faceoffs',
  templateUrl: './stats-team-leaders-faceoffs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersFaceoffsComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'face_off_won', header: 'FOW' },
    { field: 'face_off_lost', header: 'FOL' },
    { field: 'face_off_pct', header: 'FO %' },
  ];

  isMobile$: Observable<boolean>;

  constructor(
    private leagueStatsTeamFacade: LeagueStatsTeamFacade,
    private displayFacade: DisplayFacade
  ) {
    this.leagueStatsTeamFacade.leagueTeamFaceoffs$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });

    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
