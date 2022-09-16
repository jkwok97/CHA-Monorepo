import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-history-goalies-table',
  templateUrl: './history-goalies-table.component.html',
  styleUrls: ['./history-goalies-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryGoaliesTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
