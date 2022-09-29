import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-summary-salaries',
  templateUrl: './home-summary-salaries.component.html',
  styleUrls: ['./home-summary-salaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummarySalariesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
