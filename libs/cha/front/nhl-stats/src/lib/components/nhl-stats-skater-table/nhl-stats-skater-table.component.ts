import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import {
  NhlGoalieStatDto,
  NhlPlayerStatDto,
  TeamDto,
} from '@cha/shared/entities';
import { Observable, filter, first } from 'rxjs';
import { NhlStatsFacade } from '../../+state/nhl-stats.facade';

@Component({
  selector: 'cha-front-nhl-stats-skater-table',
  templateUrl: './nhl-stats-skater-table.component.html',
  styleUrls: ['./nhl-stats-skater-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsSkaterTableComponent {
  teams$: Observable<TeamDto[]>;
  total$: Observable<number>;
  isLoading$: Observable<boolean>;

  skaterStats$: Observable<NhlPlayerStatDto[]>;

  playerTableColumns = [
    { field: 'skaterFullName', header: 'Name' },
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

  first = 0;
  rows = 100;
  totalRecords = 0;
  sortField = 'points';
  stats!: NhlPlayerStatDto[] | NhlGoalieStatDto[];

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private nhlStatsFacade: NhlStatsFacade
  ) {
    this.teams$ = this.leagueDataFacade.leagueTeams$;
    this.total$ = this.nhlStatsFacade.total$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
    this.skaterStats$ = this.nhlStatsFacade.skaterStats$;

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
    }));
  }

  getPlayerPicture(id: number | undefined) {
    if (id) {
      return `https://assets1.sportsnet.ca/wp-content/uploads/players/280/${id}.png`;
    } else {
      return;
    }
  }
}
