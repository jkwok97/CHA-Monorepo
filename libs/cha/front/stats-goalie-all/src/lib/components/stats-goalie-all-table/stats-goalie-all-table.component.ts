import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { StatGoalieAllDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-front-stats-goalie-all-table',
  templateUrl: './stats-goalie-all-table.component.html',
  styleUrls: ['./stats-goalie-all-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsGoalieAllTableComponent implements OnInit {
  @Input() stats!: StatGoalieAllDto[];

  @ViewChild('dt') dt: Table | undefined;

  goalieTableColumns = [
    { field: 'team', header: 'Team', visible: true },
    { field: 'team_name', header: 'Team Name', visible: false },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'games_played', header: 'GP', visible: true },
    { field: 'minutes_played', header: 'Mins', visible: true },
    { field: 'goals_against_avg', header: 'GAA', visible: true },
    { field: 'wins', header: 'W', visible: true },
    { field: 'loss', header: 'L', visible: true },
    { field: 'ties', header: 'T', visible: true },
    { field: 'en_goals', header: 'EN', visible: true },
    { field: 'shutouts', header: 'SO', visible: true },
    { field: 'goals_against', header: 'GA', visible: true },
    { field: 'saves', header: 'Sv', visible: true },
    { field: 'shots_for', header: 'SF', visible: true },
    { field: 'save_pct', header: 'Sv%', visible: true },
    { field: 'goals', header: 'G', visible: true },
    { field: 'assists', header: 'A', visible: true },
    { field: 'points', header: 'Pts', visible: true },
    { field: 'penalty_minutes', header: 'PIM', visible: true },
    { field: 'pass_pct', header: 'Pass%', visible: true },
  ];

  first = 0;
  rows = 100;
  totalRecords = 0;
  sortField = 'wins';
  statsForTable!: any;

  ngOnInit(): void {
    this.statsForTable = this.mapItems(this.stats);
  }

  mapItems(stats: StatGoalieAllDto[]) {
    return stats.map((stat: StatGoalieAllDto) => ({
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
