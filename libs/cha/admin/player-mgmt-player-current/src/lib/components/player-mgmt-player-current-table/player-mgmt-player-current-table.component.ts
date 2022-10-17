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
  selector: 'cha-admin-player-mgmt-player-current-table',
  templateUrl: './player-mgmt-player-current-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtPlayerCurrentTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() players!: StatPlayerAllDto[];

  @ViewChild('dt') dt: Table | undefined;

  tableColumns = [
    { field: 'id', header: 'Player Stats Id', visible: true },
    { field: 'playerId', header: 'Player Id', visible: true },
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
  playersForTable!: any;
  player!: StatPlayerAllDto | null;

  ngOnInit(): void {
    this.playersForTable = this.mapItems(this.players);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(players: StatPlayerAllDto[]) {
    return players.map((player: StatPlayerAllDto) => ({
      ...player,
      playerId: `${player.player_id.id}`,
      full_name: `${player.player_id?.firstname} ${player.player_id?.lastname}`,
      team_name: `${player.teamInfo.city} ${player.teamInfo.nickname}`,
    }));
  }

  onPlayerClick(player: StatPlayerAllDto) {
    this.player = player;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.player = null;
  }
}
