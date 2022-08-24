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
  selector: 'cha-front-nhl-stats-goalie-table',
  templateUrl: './nhl-stats-goalie-table.component.html',
  styleUrls: ['./nhl-stats-goalie-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsGoalieTableComponent {
  teams$: Observable<TeamDto[]>;
  total$: Observable<number>;
  isLoading$: Observable<boolean>;

  goalieStats$: Observable<NhlGoalieStatDto[]>;

  goalieTableColumns = [
    { field: 'skaterFullName', header: 'Name' },
    { field: 'games_played', header: 'GP' },
    { field: 'wins', header: 'W' },
    { field: 'losses', header: 'L' },
    { field: 'goals_against_avg', header: 'GAA' },
    { field: 'shutouts', header: 'SO' },
    { field: 'goals_against', header: 'GA' },
    { field: 'saves', header: 'Sv' },
    { field: 'shots_against', header: 'SF' },
    { field: 'save_pct', header: 'Sv%' },
  ];

  first = 0;
  rows = 50;
  totalRecords = 0;
  sortField = 'wins';
  stats!: NhlPlayerStatDto[] | NhlGoalieStatDto[];

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private nhlStatsFacade: NhlStatsFacade
  ) {
    this.teams$ = this.leagueDataFacade.leagueTeams$;
    this.total$ = this.nhlStatsFacade.total$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
    this.goalieStats$ = this.nhlStatsFacade.goalieStats$;

    this.goalieStats$
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
