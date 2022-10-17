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
  styleUrls: ['./player-mgmt-player-current-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtPlayerCurrentTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() players!: StatPlayerAllDto[];

  @ViewChild('dt') dt: Table | undefined;

  // TODO UPDATE COLUMNS AFTER EVERY SEASON
  tableColumns = [
    { field: 'id', header: 'Rating Id', visible: true },
    { field: 'player_id', header: 'Player Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'c_rate', header: 'C', visible: true },
    { field: 'l_rate', header: 'LW', visible: true },
    { field: 'r_rate', header: 'RW', visible: true },
    { field: 'ld_rate', header: 'LD', visible: true },
    { field: 'rd_rate', header: 'RD', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  mobileTableColumns = [
    { field: 'id', header: 'Rating Id', visible: true },
    { field: 'player_id', header: 'Player Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
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
      full_name: `${player.player_id?.firstname} ${player.player_id?.lastname}`,
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
