import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-teams-summary-team',
  templateUrl: './teams-summary-team.component.html',
  styleUrls: ['./teams-summary-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryTeamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
