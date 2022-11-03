import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-league-salaries-ratings-mobile-stats',
  templateUrl: './league-salaries-ratings-mobile-stats.component.html',
  styleUrls: ['./league-salaries-ratings-mobile-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsMobileStatsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
