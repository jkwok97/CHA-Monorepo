import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './home-goalies.reducer';
import { HomeGoaliesActions } from './home-goalies.actions';
import { Observable } from 'rxjs';
import { HomeGoaliesSelectors } from './home-goalies.selectors';
import {
  StatGoaliesHistoryDto,
  StatUserGoaliesHistoryDto,
} from '@cha/shared/entities';

@Injectable()
export class HomeGoaliesFacade {
  isLoading$: Observable<boolean> = this.store.select(
    HomeGoaliesSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    HomeGoaliesSelectors.selectLoaded
  );

  allStats$: Observable<StatUserGoaliesHistoryDto[]> = this.store.select(
    HomeGoaliesSelectors.selectAll
  );

  goaliesStats$: Observable<StatGoaliesHistoryDto[]> = this.store.select(
    HomeGoaliesSelectors.selectGoaliesStats
  );

  constructor(private store: Store<State>) {}

  getUserGoaliestatsBySeason(seasonType: string) {
    this.store.dispatch(
      HomeGoaliesActions.getUserGoaliesStatsBySeason({ seasonType })
    );
  }

  getUserGoaliesAllTimeStatsBySeason(seasonType: string) {
    this.store.dispatch(
      HomeGoaliesActions.getUserGoaliesAllTimeStatsBySeason({ seasonType })
    );
  }
}
