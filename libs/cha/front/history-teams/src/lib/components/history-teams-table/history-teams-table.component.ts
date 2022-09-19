import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';
import { first } from 'rxjs';

@Component({
  selector: 'cha-front-history-teams-table',
  templateUrl: './history-teams-table.component.html',
  styleUrls: ['./history-teams-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryTeamsTableComponent implements OnInit, OnChanges {
  @Input() stats!: StatTeamsHistoryDto[];
  @Input() statType!: string;

  @ViewChild('dt') dt: Table | undefined;

  teamsTableColumns = [
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

  mobileTeamsTableColumns = [
    { field: 'team', header: 'Team', visible: true },
    { field: 'points', header: 'Pts', visible: true },
    { field: 'action', header: '...More', visible: true },
  ];

  first = 0;
  rows = 50;
  totalRecords = 0;
  sortField = 'points';
  statsForTable!: any;
  isMobile = false;
  display = false;
  teamStats!: any;

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
    this.teamsTableColumns[0].visible =
      changes['statType'].currentValue === 'season';
  }

  mapItems(stats: StatTeamsHistoryDto[]) {
    return stats.map((stat: StatTeamsHistoryDto) => ({
      ...stat,
      teamLogo: this.getString(stat.team_id.teamlogo),
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
