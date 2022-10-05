import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-player-mgmt-info-table',
  templateUrl: './player-mgmt-info-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() players!: PlayerDto[];

  @ViewChild('dt') dt: Table | undefined;

  playerTableColumns = [
    { field: 'id', header: 'Player Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'nhl_id', header: 'NHL Id', visible: true },
    { field: 'isactive', header: 'Is Active', visible: true },
    { field: 'isgoalie', header: 'Is Goalie', visible: true },
    { field: 'isdefense', header: 'Is Defense', visible: true },
    { field: 'isforward', header: 'Is Forward', visible: true },
    { field: 'primary_position', header: 'Primary Position', visible: true },
    { field: 'alt_position', header: 'Alt Position', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  mobilePlayerTableColumns = [
    { field: 'id', header: 'Player Id', visible: true },
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
  player!: PlayerDto | null;

  constructor(private router: Router) {}

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
    this.router.navigateByUrl('/players/info/add');
  }

  onClose() {
    this.display = false;
    this.player = null;
  }
}
