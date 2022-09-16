import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-summary-team-record',
  templateUrl: './home-summary-team-record.component.html',
  styleUrls: ['./home-summary-team-record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryTeamRecordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
