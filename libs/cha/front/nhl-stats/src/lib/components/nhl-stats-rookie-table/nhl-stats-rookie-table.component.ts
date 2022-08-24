import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { NhlPlayerStatDto, TeamDto } from '@cha/shared/entities';
import { Observable, filter, first } from 'rxjs';
import { NhlStatsFacade } from '../../+state/nhl-stats.facade';

@Component({
  selector: 'cha-front-nhl-stats-rookie-table',
  templateUrl: './nhl-stats-rookie-table.component.html',
  styleUrls: ['./nhl-stats-rookie-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsRookieTableComponent {
  teams$: Observable<TeamDto[]>;
  total$: Observable<number>;
  isLoading$: Observable<boolean>;

  rookieStats$: Observable<NhlPlayerStatDto[]>;

  playerTableColumns = [
    { field: 'skaterFullName', header: 'Name' },
    { field: 'positionCode', header: 'Position' },
    { field: 'gamesPlayed', header: 'GP' },
    { field: 'goals', header: 'G' },
    { field: 'assists', header: 'A' },
    { field: 'points', header: 'Pts' },
    { field: 'pointsPerGame', header: 'PPG' },
    { field: 'plusMinus', header: '+/-' },
    { field: 'penaltyMinutes', header: 'PIM' },
    { field: 'ppPoints', header: 'PPP' },
    { field: 'shPoints', header: 'SHP' },
    { field: 'gameWinningGoals', header: 'GWG' },
    { field: 'shots', header: 'SOG' },
    { field: 'shootingPct', header: 'Sh%' },
    { field: 'faceoffWinPct', header: 'FO%' },
  ];

  first = 0;
  rows = 100;
  totalRecords = 0;
  sortField = 'points';
  stats!: NhlPlayerStatDto[];

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private nhlStatsFacade: NhlStatsFacade
  ) {
    this.teams$ = this.leagueDataFacade.leagueTeams$;
    this.total$ = this.nhlStatsFacade.total$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
    this.rookieStats$ = this.nhlStatsFacade.rookieStats$;

    this.rookieStats$
      .pipe(
        filter((stats) => stats.length > 0),
        first()
      )
      .subscribe((stats) => {
        this.stats = this.mapItems(stats);
        this.totalRecords = stats.length;
      });
  }

  mapItems(stats: NhlPlayerStatDto[]) {
    return stats.map((stat: NhlPlayerStatDto) => ({
      ...stat,
      playerImg: this.getPlayerPicture(stat.playerId),
    }));
  }

  getPlayerPicture(id: number | undefined) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return;
    }
  }
}
