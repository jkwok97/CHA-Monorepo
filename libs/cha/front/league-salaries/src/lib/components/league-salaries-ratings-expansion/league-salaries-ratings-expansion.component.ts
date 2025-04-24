import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { PlayerRatingDto, GoalieRatingDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-league-salaries-ratings-expansion',
  templateUrl: './league-salaries-ratings-expansion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsExpansionComponent {
  @Input() ratings!: PlayerRatingDto | GoalieRatingDto;

  isOffSeason$: Observable<boolean>;
  constructor(private leagueDataFacade: LeagueDataFacade) {
    this.isOffSeason$ = this.leagueDataFacade.isOffSeason$;
  }
}
