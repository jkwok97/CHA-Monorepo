import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-history-players-all-sidebar',
  templateUrl: './history-players-all-sidebar.component.html',
  styleUrls: ['./history-players-all-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPlayersAllSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
