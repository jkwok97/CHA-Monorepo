import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-summary-team-banner-record',
  templateUrl: './summary-team-banner-record.component.html',
  styleUrls: ['./summary-team-banner-record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryTeamBannerRecordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
