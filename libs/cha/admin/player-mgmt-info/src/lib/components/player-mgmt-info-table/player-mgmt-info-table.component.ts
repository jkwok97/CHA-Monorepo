import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlayerDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-player-mgmt-info-table',
  templateUrl: './player-mgmt-info-table.component.html',
  styleUrls: ['./player-mgmt-info-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() players!: PlayerDto[];

  @ViewChild('dt') dt: Table | undefined;

  playerTableColumns = [
    { field: 'id', header: 'User Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'email', header: 'Email', visible: true },
    { field: 'isactive', header: 'Is Active', visible: true },
    { field: 'isadmin', header: 'Is Admin', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  mobilePlayerTableColumns = [
    { field: 'id', header: 'User Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'email', header: 'Email', visible: true },
    { field: 'isactive', header: 'Is Active', visible: true },
    { field: 'isadmin', header: 'Is Admin', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'full_name';
  statsForTable!: any;
  display = false;
  playersForTable!: any;
  player!: PlayerDto | null;

  ngOnInit(): void {
    this.playersForTable = this.mapItems(this.players);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(players: PlayerDto[]) {
    return players.map((player: PlayerDto) => ({
      ...player,
      full_name: `${player.firstname} ${player.lastname}`,
    }));
  }

  onUserClick(player: PlayerDto) {
    this.player = player;
    this.display = true;
  }

  onAddClick() {
    this.player = null;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.player = null;
  }
}
