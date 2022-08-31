import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { StatPlayerAllDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-front-stats-player-all-table',
  templateUrl: './stats-player-all-table.component.html',
  styleUrls: ['./stats-player-all-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPlayerAllTableComponent implements OnInit {
  @Input() stats!: StatPlayerAllDto[];

  @ViewChild('dt') dt: Table | undefined;

  playerTableColumns = [
    { field: 'team', header: 'Team', visible: true },
    { field: 'team_name', header: 'Team Name', visible: false },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'position', header: 'Pos.', visible: true },
    { field: 'games_played', header: 'GP', visible: true },
    { field: 'goals', header: 'G', visible: true },
    { field: 'assists', header: 'A', visible: true },
    { field: 'points', header: 'Pts', visible: true },
    { field: 'points_per_sixty', header: 'Pts/60', visible: true },
    { field: 'plus_minus', header: '+/-', visible: true },
    { field: 'penalty_minutes', header: 'PIM', visible: true },
    { field: 'pp_goals', header: 'PPG', visible: true },
    { field: 'sh_goals', header: 'SHG', visible: true },
    { field: 'gw_goals', header: 'GWG', visible: true },
    { field: 'gt_goals', header: 'GTG', visible: true },
    { field: 'shots', header: 'SOG', visible: true },
    { field: 'shooting_pct', header: 'Sh%', visible: true },
    { field: 'minutes_per_game', header: 'Min/G', visible: true },
    { field: 'fo_pct', header: 'FO%', visible: true },
    { field: 'pass_pct', header: 'Pass%', visible: true },
    { field: 'corner_pct', header: 'CB%', visible: true },
    { field: 'hits', header: 'H', visible: true },
    { field: 'blocked_shots', header: 'BS', visible: true },
  ];

  first = 0;
  rows = 100;
  totalRecords = 0;
  sortField = 'points';
  statsForTable!: any;

  ngOnInit(): void {
    this.statsForTable = this.mapItems(this.stats);
  }

  mapItems(stats: StatPlayerAllDto[]) {
    return stats.map((stat: StatPlayerAllDto) => ({
      ...stat,
      teamLogo: this.getString(stat.teamInfo.teamlogo),
      full_name: `${stat.player_id?.firstname} ${stat.player_id?.lastname}`,
      team_name: `${stat.teamInfo.city} ${stat.teamInfo.nickname}`,
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
