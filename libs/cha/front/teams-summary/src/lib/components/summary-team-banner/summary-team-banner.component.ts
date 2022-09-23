import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-summary-team-banner',
  templateUrl: './summary-team-banner.component.html',
  styleUrls: ['./summary-team-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryTeamBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
