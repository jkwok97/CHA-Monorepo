import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-stats-team-leaders',
  templateUrl: './stats-team-leaders.component.html',
  styleUrls: ['./stats-team-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
