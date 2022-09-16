import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { StatPlayersHistoryDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-front-history-players-table',
  templateUrl: './history-players-table.component.html',
  styleUrls: ['./history-players-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPlayersTableComponent implements OnInit, OnChanges {
  @Input() stats!: StatPlayersHistoryDto[];
  @Input() statType!: string;

  @ViewChild('dt') dt: Table | undefined;

  playerTableColumns = [
    { field: 'playing_year', header: 'Year', visible: true },
    { field: 'season_type', header: 'Season', visible: false },
    { field: 'team', header: 'Team', visible: true },
    { field: 'team_name', header: 'Team Name', visible: false },
    { field: 'full_name', header: 'Player', visible: true },
    { field: 'player_name', header: 'Player Name', visible: false },
    { field: 'games_played', header: 'GP', visible: true },
    { field: 'goals', header: 'G', visible: true },
    { field: 'assists', header: 'A', visible: true },
    { field: 'points', header: 'Pts', visible: true },
    { field: 'pointsPerSixty', header: 'Pts/60', visible: true },
    { field: 'plus_minus', header: '+/-', visible: true },
    { field: 'penalty_minutes', header: 'PIM', visible: true },
    { field: 'pp_goals', header: 'PPG', visible: true },
    { field: 'sh_goals', header: 'SHG', visible: true },
    { field: 'gw_goals', header: 'GWG', visible: true },
    { field: 'shots', header: 'SOG', visible: true },
    { field: 'shooting_pct', header: 'Sh%', visible: true },
    { field: 'minutes_per_game', header: 'Min/G', visible: true },
    { field: 'fo_pct', header: 'FO%', visible: true },
    { field: 'pass_pct', header: 'Pass%', visible: true },
    { field: 'corner_pct', header: 'CB%', visible: true },
    { field: 'hit_per_game', header: 'Hits/G', visible: true },
    { field: 'blocked_shots', header: 'BS', visible: true },
  ];

  first = 0;
  rows = 50;
  totalRecords = 0;
  sortField = 'points';
  statsForTable!: any;

  ngOnInit(): void {
    this.statsForTable = this.mapItems(this.stats);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.playerTableColumns[0].visible =
      changes['statType'].currentValue === 'season';
    this.playerTableColumns[2].visible =
      changes['statType'].currentValue === 'season';
    this.playerTableColumns[19].visible =
      changes['statType'].currentValue === 'season';
    this.playerTableColumns[20].visible =
      changes['statType'].currentValue === 'season';
    this.playerTableColumns[21].visible =
      changes['statType'].currentValue === 'season';
  }

  mapItems(stats: StatPlayersHistoryDto[]) {
    return stats.map((stat: StatPlayersHistoryDto) => ({
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
}