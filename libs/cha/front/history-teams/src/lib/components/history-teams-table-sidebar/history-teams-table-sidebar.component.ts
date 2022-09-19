import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-history-teams-table-sidebar',
  templateUrl: './history-teams-table-sidebar.component.html',
  styleUrls: ['./history-teams-table-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryTeamsTableSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
