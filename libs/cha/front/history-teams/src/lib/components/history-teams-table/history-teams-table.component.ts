import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-front-history-teams-table',
  templateUrl: './history-teams-table.component.html',
  styleUrls: ['./history-teams-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryTeamsTableComponent implements OnInit {
  @Input() stats!: StatTeamsHistoryDto[];

  @ViewChild('dt') dt: Table | undefined;

  playerTableColumns = [
    { field: 'playing_year', header: 'Year', visible: true },
    { field: 'season_type', header: 'Season', visible: false },
    { field: 'team', header: 'Team', visible: true },
    { field: 'team_name', header: 'Team Name', visible: false },
    { field: 'games_played', header: 'GP', visible: true },
    { field: 'wins', header: 'W', visible: true },
    { field: 'loss', header: 'L', visible: true },
    { field: 'ties', header: 'T', visible: true },
    { field: 'points', header: 'Pts', visible: true },
    { field: 'goals_for', header: 'GF', visible: true },
    { field: 'goalsForPerGame', header: 'GF/g', visible: true },
    { field: 'goals_against', header: 'GA', visible: true },
    { field: 'goalsAgainstPerGame', header: 'GA/g', visible: true },
    { field: 'goalDiff', header: 'G Diff', visible: true },
    { field: 'winPct', header: 'Win%', visible: true },
    { field: 'ppPct', header: 'PP%', visible: true },
    { field: 'pkPct', header: 'PK%', visible: true },
    { field: 'sh_goals', header: 'SHG', visible: true },
    { field: 'pimPerGame', header: 'PIM/g', visible: true },
    { field: 'foPct', header: 'FO%', visible: true },
    { field: 'passPct', header: 'Pass%', visible: true },
    { field: 'cornerPct', header: 'CB%', visible: true },
  ];

  first = 0;
  rows = 50;
  totalRecords = 0;
  sortField = 'points';
  statsForTable!: any;

  ngOnInit(): void {
    this.statsForTable = this.mapItems(this.stats);
  }

  mapItems(stats: StatTeamsHistoryDto[]) {
    return stats.map((stat: StatTeamsHistoryDto) => ({
      ...stat,
      goalsForPerGame: (stat.goals_for / stat.games_played).toFixed(2),
      goalsAgainstPerGame: (stat.goals_against / stat.games_played).toFixed(2),
      goalDiff: stat.goals_for - stat.goals_against,
      winPct: ((stat.wins / stat.games_played) * 100).toFixed(1),
      ppPct: ((stat.pp_goals / stat.pp_attempts) * 100).toFixed(1),
      pkPct: (
        ((stat.pk_attempts - stat.pk_goals) / stat.pk_attempts) *
        100
      ).toFixed(1),
      foPct: (
        ((stat.face_off_won + stat.face_off_lost - stat.face_off_lost) /
          (stat.face_off_won + stat.face_off_lost)) *
        100
      ).toFixed(1),
      passPct: (
        ((stat.pass_complete + stat.pass_incomplete - stat.pass_incomplete) /
          (stat.pass_complete + stat.pass_incomplete)) *
        100
      ).toFixed(1),
      cornerPct: (
        ((stat.corner_lost + stat.corner_won - stat.corner_lost) /
          (stat.corner_lost + stat.corner_won)) *
        100
      ).toFixed(1),
      pimPerGame: (stat.penalty_minutes / stat.games_played).toFixed(1),
      teamLogo: this.getString(stat.team_id.teamlogo),
      team_name: `${stat.team_id.city} ${stat.team_id.nickname}`,
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
