import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-league-salaries-ratings-badge',
  templateUrl: './league-salaries-ratings-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsBadgeComponent {
  @Input() rating!: string;
  @Input() title!: string;
}
