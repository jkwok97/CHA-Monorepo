import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatGoaliesHistoryDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';
import { first } from 'rxjs';

@Component({
  selector: 'cha-front-goalie-stats-table',
  templateUrl: './goalie-stats-table.component.html',
  styleUrls: ['./goalie-stats-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalieStatsTableComponent implements OnInit {
  @Input() stats!: StatGoaliesHistoryDto[];
  @Input() statType!: string;

  @ViewChild('dt') dt: Table | undefined;

  goalieTableColumns = [
    { field: 'playing_year', header: 'Year', visible: true },
    { field: 'season_type', header: 'Season', visible: false },
    { field: 'team', header: 'Team', visible: true },
    { field: 'team_name', header: 'Team Name', visible: false },
    { field: 'full_name', header: 'Player', visible: true },
    { field: 'player_name', header: 'Player Name', visible: false },
    { field: 'games_played', header: 'GP', visible: true },
    { field: 'minutes_played', header: 'Mins', visible: true },
    { field: 'goals_against_avg', header: 'GAA', visible: true },
    { field: 'wins', header: 'W', visible: true },
    { field: 'loss', header: 'L', visible: true },
    { field: 'ties', header: 'T', visible: true },
    { field: 'shutouts', header: 'SO', visible: true },
    { field: 'goals_against', header: 'GA', visible: true },
    { field: 'saves', header: 'Sv', visible: true },
    { field: 'shots_for', header: 'SF', visible: true },
    { field: 'save_pct', header: 'Sv%', visible: true },
    { field: 'goals', header: 'G', visible: true },
    { field: 'assists', header: 'A', visible: true },
    { field: 'points', header: 'Pts', visible: true },
    { field: 'penalty_minutes', header: 'PIM', visible: true },
  ];

  mobileGoalieTableColumns = [
    { field: 'team', header: 'Team', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'wins', header: 'Wins', visible: true },
    { field: 'action', header: '...More', visible: true },
  ];

  first = 0;
  rows = 50;
  totalRecords = 0;
  sortField = 'wins';
  statsForTable!: any;
  display = false;
  playerStats!: any;
  isMobile = false;

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.statsForTable = this.mapItems(this.stats);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['statType']) {
      this.goalieTableColumns[0].visible =
        changes['statType'].currentValue === 'season';
      this.goalieTableColumns[2].visible =
        changes['statType'].currentValue === 'season';
      this.mobileGoalieTableColumns[0].visible =
        changes['statType'].currentValue === 'season';
    }
  }

  mapItems(stats: StatGoaliesHistoryDto[]) {
    return stats.map((stat: StatGoaliesHistoryDto) => ({
      ...stat,
      full_name: `${stat.player_id?.firstname} ${stat.player_id?.lastname}`,
      team_name: `${stat.teamInfo?.city} ${stat.teamInfo?.nickname}`,
      teamLogo: stat.teamInfo?.teamlogo
        ? this.getString(stat.teamInfo?.teamlogo)
        : '',
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  onPlayerClick(stat: StatGoaliesHistoryDto) {
    this.playerStats = stat;
    this.display = true;
  }

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return '';
    }
  }
}
