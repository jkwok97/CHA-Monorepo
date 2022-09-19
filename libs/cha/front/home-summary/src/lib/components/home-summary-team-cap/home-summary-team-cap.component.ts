import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-summary-team-cap',
  templateUrl: './home-summary-team-cap.component.html',
  styleUrls: ['./home-summary-team-cap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryTeamCapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
