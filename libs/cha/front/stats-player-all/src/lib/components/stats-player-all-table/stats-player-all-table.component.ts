import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { StatPlayerAllDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-stats-player-all-table',
  templateUrl: './stats-player-all-table.component.html',
  styleUrls: ['./stats-player-all-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPlayerAllTableComponent implements OnInit {
  @Input() stats!: StatPlayerAllDto[];

  playerTableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'name', header: 'Name' },
    { field: 'position', header: 'Pos.' },
    { field: 'games_played', header: 'GP' },
    { field: 'goals', header: 'G' },
    { field: 'assists', header: 'A' },
    { field: 'points', header: 'Pts' },
    { field: 'points_per_sixty', header: 'Pts/60' },
    { field: 'plus_minus', header: '+/-' },
    { field: 'penalty_minutes', header: 'PIM' },
    { field: 'pp_goals', header: 'PPG' },
    { field: 'sh_goals', header: 'SHG' },
    { field: 'gw_goals', header: 'GWG' },
    { field: 'gt_goals', header: 'GTG' },
    { field: 'shots', header: 'SOG' },
    { field: 'shooting_pct', header: 'Sh%' },
    { field: 'minutes_per_game', header: 'Min/G' },
    { field: 'fo_pct', header: 'FO%' },
    { field: 'pass_pct', header: 'Pass%' },
    { field: 'corner_pct', header: 'CB%' },
    { field: 'hits', header: 'H' },
    { field: 'blocked_shots', header: 'BS' },
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
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
