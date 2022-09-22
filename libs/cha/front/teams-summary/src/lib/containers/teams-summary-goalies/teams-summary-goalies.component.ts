import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-teams-summary-goalies',
  templateUrl: './teams-summary-goalies.component.html',
  styleUrls: ['./teams-summary-goalies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryGoaliesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
