import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-history-goalie-sidebar',
  templateUrl: './history-goalie-sidebar.component.html',
  styleUrls: ['./history-goalie-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryGoalieSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
