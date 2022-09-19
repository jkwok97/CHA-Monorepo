import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-stats-goalie-all-sidebar',
  templateUrl: './stats-goalie-all-sidebar.component.html',
  styleUrls: ['./stats-goalie-all-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsGoalieAllSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
