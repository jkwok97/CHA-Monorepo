import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-league-salaries-ratings-mobile-stats',
  templateUrl: './league-salaries-ratings-mobile-stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsMobileStatsComponent {
  @Input() stats!: PlayerRatingDto | GoalieRatingDto;
}
