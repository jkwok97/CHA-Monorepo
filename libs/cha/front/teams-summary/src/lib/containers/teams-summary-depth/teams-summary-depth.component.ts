import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-teams-summary-depth',
  templateUrl: './teams-summary-depth.component.html',
  styleUrls: ['./teams-summary-depth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryDepthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
