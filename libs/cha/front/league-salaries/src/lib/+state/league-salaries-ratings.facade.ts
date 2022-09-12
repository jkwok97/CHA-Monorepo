import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-salaries-ratings.reducer';
import { LeagueSalariesAndRatingActions } from './league-salaries-ratings.actions';
import { Observable } from 'rxjs';
import { LeagueSalariesAndRatingsSelectors } from './league-salaries-ratings.selectors';
import { SalariesAndRatingsDto } from '@cha/shared/entities';

@Injectable()
export class LeagueTradesFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueSalariesAndRatingsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueSalariesAndRatingsSelectors.selectLoaded
  );

  salaries$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    LeagueSalariesAndRatingsSelectors.selectSalaries
  );

  constructor(private store: Store<State>) {}

  getPlayerSalaries(season: string) {
    this.store.dispatch(
      LeagueSalariesAndRatingActions.getPlayerSalaries({ season })
    );
  }

  getGoaliesSalaries(season: string) {
    this.store.dispatch(
      LeagueSalariesAndRatingActions.getGoaliesalaries({ season })
    );
  }
}
