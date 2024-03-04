import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DisplayFacade, LeagueDataFacade } from '@cha/domain/core';
import { NhlPlayerStatDto, TeamDto } from '@cha/shared/entities';
import { Observable, filter, first } from 'rxjs';
import { NhlStatsFacade } from '../../+state/nhl-stats.facade';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-front-nhl-stats-rookie-table',
  templateUrl: './nhl-stats-rookie-table.component.html',
  styleUrls: ['./nhl-stats-rookie-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsRookieTableComponent {
  @ViewChild('dt') dt: Table | undefined;

  teams$: Observable<TeamDto[]>;
  total$: Observable<number>;
  isLoading$: Observable<boolean>;

  rookieStats$: Observable<NhlPlayerStatDto[]>;

  playerTableColumns = [
    { field: 'skaterFullName', header: 'Name' },
    { field: 'chaTeam', header: 'Team' },
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

  mobilePlayerTableColumns = [
    { field: 'skaterFullName', header: 'Name' },
    { field: 'chaTeam', header: 'Team' },
    { field: 'points', header: 'Pts' },
    { field: 'action', header: '...More' },
  ];

  first = 0;
  rows = 100;
  totalRecords = 0;
  sortField = 'points';
  stats!: NhlPlayerStatDto[];
  isMobile = false;
  display = false;
  playerStats!: any;

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private nhlStatsFacade: NhlStatsFacade,
    private displayFacade: DisplayFacade
  ) {
    this.teams$ = this.leagueDataFacade.leagueTeams$;
    this.total$ = this.nhlStatsFacade.total$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
    this.rookieStats$ = this.nhlStatsFacade.rookieStats$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

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
      chaTeam: `${stat.chaPlayerTeam ? stat.chaPlayerTeam[0]['city'] : ''} ${
        stat.chaPlayerTeam ? stat.chaPlayerTeam[0]['nickname'] : ''
      }`,
    }));
  }

  getPlayerPicture(id: number | undefined) {
    if (id) {
      return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
    } else {
      return 'assets/images/skater.jpg';
    }
  }

  onPlayerClick(stat: NhlPlayerStatDto) {
    this.playerStats = stat;
    this.display = true;
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }
}
