import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-teams-summary-awards',
  templateUrl: './teams-summary-awards.component.html',
  styleUrls: ['./teams-summary-awards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryAwardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
