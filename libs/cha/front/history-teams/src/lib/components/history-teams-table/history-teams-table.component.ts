import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-history-teams-table',
  templateUrl: './history-teams-table.component.html',
  styleUrls: ['./history-teams-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryTeamsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
