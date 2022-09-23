import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-players-stats-table',
  templateUrl: './players-stats-table.component.html',
  styleUrls: ['./players-stats-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersStatsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
