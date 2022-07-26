import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DisplayFacade, LeagueDataFacade } from '@cha/domain/core';
import {
  NhlGoalieStatDto,
  NhlPlayerStatDto,
  TeamDto,
} from '@cha/shared/entities';
import { Observable, filter, first } from 'rxjs';
import { NhlStatsFacade } from '../../+state/nhl-stats.facade';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-front-nhl-stats-skater-table',
  templateUrl: './nhl-stats-skater-table.component.html',
  styleUrls: ['./nhl-stats-skater-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsSkaterTableComponent {
  @ViewChild('dt') dt: Table | undefined;

  teams$: Observable<TeamDto[]>;
  total$: Observable<number>;
  isLoading$: Observable<boolean>;

  skaterStats$: Observable<NhlPlayerStatDto[]>;

  playerTableColumns = [
    { field: 'skaterFullName', header: 'Name' },
    { field: 'chaTeam', header: 'Team' },
    { field: 'position', header: 'Position' },
    { field: 'games_played', header: 'GP' },
    { field: 'goals', header: 'G' },
    { field: 'assists', header: 'A' },
    { field: 'points', header: 'Pts' },
    { field: 'points_per_game', header: 'PPG' },
    { field: 'plus_minus', header: '+/-' },
    { field: 'penalty_minutes', header: 'PIM' },
    { field: 'power_play_points', header: 'PPP' },
    { field: 'short_handed_points', header: 'SHP' },
    { field: 'game_winning_goals', header: 'GWG' },
    { field: 'shots_on_goal', header: 'SOG' },
    { field: 'shooting_pct', header: 'Sh%' },
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
  stats!: NhlPlayerStatDto[] | NhlGoalieStatDto[];
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
    this.skaterStats$ = this.nhlStatsFacade.skaterStats$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.skaterStats$
      .pipe(
        filter((stats) => stats.length > 0),
        first()
      )
      .subscribe((stats) => {
        this.stats = this.mapItems(stats);
        this.totalRecords = stats.length;
      });
  }

  mapItems(stats: NhlPlayerStatDto[] | NhlGoalieStatDto[]) {
    return stats.map((stat: NhlPlayerStatDto | NhlGoalieStatDto) => ({
      ...stat,
      playerImg: this.getPlayerPicture(stat.player_id),
      chaTeam: `${stat.chaPlayerTeam ? stat.chaPlayerTeam[0]['city'] : ''} ${
        stat.chaPlayerTeam ? stat.chaPlayerTeam[0]['nickname'] : ''
      }`,
    }));
  }

  getPlayerPicture(id: number | undefined) {
    if (id) {
      return `https://assets1.sportsnet.ca/wp-content/uploads/players/280/${id}.png`;
    } else {
      return;
    }
  }

  onPlayerClick(stat: NhlPlayerStatDto | NhlGoalieStatDto) {
    this.playerStats = stat;
    this.display = true;
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }
}
