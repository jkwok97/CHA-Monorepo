import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-teams-summary-salaries',
  templateUrl: './teams-summary-salaries.component.html',
  styleUrls: ['./teams-summary-salaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummarySalariesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
