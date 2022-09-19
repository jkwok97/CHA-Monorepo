import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-league-salaries-ratings-expansion',
  templateUrl: './league-salaries-ratings-expansion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsExpansionComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;
}
