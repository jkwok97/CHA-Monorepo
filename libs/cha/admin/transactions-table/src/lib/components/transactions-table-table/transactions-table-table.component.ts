import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GetTradeDto, PlayerDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-transactions-table-table',
  templateUrl: './transactions-table-table.component.html',
  styleUrls: ['./transactions-table-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() trades!: GetTradeDto[];

  @ViewChild('dt') dt: Table | undefined;

  // TODO UPDATE COLUMNS AFTER EVERY SEASON
  tableColumns = [
    { field: 'id', header: 'Trade Id' },
    { field: 'transaction_date', header: 'Date' },
    { field: 'teamOne', header: 'Team' },
    { field: 'team_one_picks', header: 'Picks' },
    { field: 'teamOnePlayers', header: 'Players' },
    { field: 'teamTwo', header: 'Team' },
    { field: 'team_two_picks', header: 'Picks' },
    { field: 'teamTwoPlayers', header: 'Players' },
    { field: 'action', header: 'Edit' },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'full_name';
  display = false;
  tradesForTable!: any;
  trade!: GetTradeDto | null;

  ngOnInit(): void {
    this.tradesForTable = this.mapItems(this.trades);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(trades: GetTradeDto[]) {
    return trades.map((trade: GetTradeDto) => ({
      ...trade,
      teamOne: `${trade.team_one_id.city} ${trade.team_one_id.nickname}`,
      teamTwo: `${trade.team_two_id.city} ${trade.team_two_id.nickname}`,
      teamOnePlayers: this.getString(trade.team_one_players),
      teamTwoPlayers: this.getString(trade.team_two_players),
    }));
  }

  getString(players: any[]) {
    return players.map(
      (player: any) => `${player.player?.firstname} ${player.player?.lastname}`
    );
  }

  onClick(trade: GetTradeDto) {
    this.trade = trade;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.trade = null;
  }

  formatDate(date: string) {
    const newDate = date.slice(0, 10);

    const newString = newDate.replace(/-/g, '/');
    return newString;
  }
}
