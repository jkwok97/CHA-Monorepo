import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ScheduleAllDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-schedule-games-table',
  templateUrl: './schedule-games-table.component.html',
  styleUrls: ['./schedule-games-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleGamesTableComponent implements OnInit {
  @Input() games!: ScheduleAllDto[];
  @Input() isMobile!: boolean;

  @ViewChild('dt') dt: Table | undefined;

  tableColumns = [
    { field: 'id', header: 'Game Id', visible: true },
    { field: 'game_day', header: 'Game Day', visible: true },
    { field: 'visTeam', header: 'Visiting', visible: true },
    { field: 'vis_team_score', header: 'Visiting Score', visible: true },
    { field: 'vs', header: '@', visible: true },
    { field: 'home_team_score', header: 'Home Score', visible: true },
    { field: 'homeTeam', header: 'Home', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  mobileTableColumns = [
    { field: 'game_day', header: 'Game Day', visible: true },
    { field: 'visTeam', header: 'Visiting', visible: true },
    { field: 'vis_team_score', header: 'Visiting Score', visible: true },
    { field: 'home_team_score', header: 'Home Score', visible: true },
    { field: 'homeTeam', header: 'Home', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'full_name';
  statsForTable!: any;
  display = false;
  gamesForTable!: any;
  game!: ScheduleAllDto | null;

  ngOnInit(): void {
    this.gamesForTable = this.mapItems(this.games);
  }

  mapItems(games: ScheduleAllDto[]) {
    return games.map((game: ScheduleAllDto) => ({
      ...game,
      homeTeam: `${game.homeTeamInfo.city} ${game.homeTeamInfo.nickname}`,
      visTeam: `${game.visTeamInfo.city} ${game.visTeamInfo.nickname}`,
    }));
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  onClick(game: ScheduleAllDto) {
    this.game = game;
    this.display = true;
  }
}
