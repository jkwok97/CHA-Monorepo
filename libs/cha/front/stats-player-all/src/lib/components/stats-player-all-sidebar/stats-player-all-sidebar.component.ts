import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-stats-player-all-sidebar',
  templateUrl: './stats-player-all-sidebar.component.html',
  styleUrls: ['./stats-player-all-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPlayerAllSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
