import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlayerRatingDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';
@Component({
  selector: 'cha-admin-player-mgmt-ratings-player-table',
  templateUrl: './player-mgmt-ratings-player-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsPlayerTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() players!: PlayerRatingDto[];

  @ViewChild('dt') dt: Table | undefined;

  // TODO UPDATE COLUMNS AFTER EVERY SEASON
  tableColumns = [
    { field: 'id', header: 'Rating Id', visible: true },
    { field: 'playing_year', header: 'Year', visible: true },
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
  player!: PlayerRatingDto | null;

  ngOnInit(): void {
    this.playersForTable = this.mapItems(this.players);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(ratings: PlayerRatingDto[]) {
    return ratings.map((rating: PlayerRatingDto) => ({
      ...rating,
      full_name: `${rating.playerInfo?.firstname} ${rating.playerInfo?.lastname}`,
    }));
  }

  onSalaryClick(rating: PlayerRatingDto) {
    this.player = rating;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.player = null;
  }
}
