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
  selector: 'cha-admin-player-mgmt-goalie-current-table',
  templateUrl: './player-mgmt-goalie-current-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtGoalieCurrentTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() goalies!: StatGoalieAllDto[];

  @ViewChild('dt') dt: Table | undefined;

  tableColumns = [
    { field: 'id', header: 'Player Stats Id', visible: true },
    { field: 'playerId', header: 'Player Id', visible: true },
    { field: 'sportsnetId', header: 'Sportsnet Id', visible: true },
    { field: 'nhlId', header: 'NHL Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'team_name', header: 'Team', visible: true },
    { field: 'player_status', header: 'Status', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  mobileTableColumns = [
    { field: 'id', header: 'Player Stats Id', visible: true },
    { field: 'playerId', header: 'Player Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'team_name', header: 'Team', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'full_name';
  statsForTable!: any;
  display = false;
  goaliesForTable!: any;
  goalie!: StatGoalieAllDto | null;

  ngOnInit(): void {
    this.goaliesForTable = this.mapItems(this.goalies);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(goalies: StatGoalieAllDto[]) {
    return goalies.map((goalie: StatGoalieAllDto) => ({
      ...goalie,
      playerId: `${goalie.player_id.id}`,
      nhlId: `${goalie.player_id.nhl_id}`,
      sportsnetId: `${goalie.player_id.sportsnet_id}`,
      full_name: `${goalie.player_id?.firstname} ${goalie.player_id?.lastname}`,
      team_name: `${goalie.teamInfo.city} ${goalie.teamInfo.nickname}`,
    }));
  }

  onGoalieClick(goalie: StatGoalieAllDto) {
    this.goalie = goalie;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.goalie = null;
  }
}
