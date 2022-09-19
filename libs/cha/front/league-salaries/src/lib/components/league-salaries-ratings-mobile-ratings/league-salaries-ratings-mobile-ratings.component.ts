import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-league-salaries-ratings-mobile-ratings',
  templateUrl: './league-salaries-ratings-mobile-ratings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsMobileRatingsComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
}
