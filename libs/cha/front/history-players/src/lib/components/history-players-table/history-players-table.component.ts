import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-history-players-table',
  templateUrl: './history-players-table.component.html',
  styleUrls: ['./history-players-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPlayersTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
