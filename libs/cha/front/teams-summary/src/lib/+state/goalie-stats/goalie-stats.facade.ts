import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  StatGoaliesHistoryDto,
  StatUserGoaliesHistoryDto,
} from '@cha/shared/entities';
import { State } from './goalie-stats.reducer';
import { GoalieStatsActions } from './goalie-stats.actions';
import { GoalieStatsSelectors } from './goalie-stats.selectors';

@Injectable()
export class GoalieStatsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    GoalieStatsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    GoalieStatsSelectors.selectLoaded
  );

  allStats$: Observable<StatUserGoaliesHistoryDto[]> = this.store.select(
    GoalieStatsSelectors.selectAll
  );

  goaliesStats$: Observable<StatGoaliesHistoryDto[]> = this.store.select(
    GoalieStatsSelectors.selectGoaliesStats
  );

  constructor(private store: Store<State>) {}

  getUserGoaliestatsBySeason(seasonType: string) {
    this.store.dispatch(
      GoalieStatsActions.getUserGoaliesStatsBySeason({ seasonType })
    );
  }

  getUserGoaliesAllTimeStatsBySeason(seasonType: string) {
    this.store.dispatch(
      GoalieStatsActions.getUserGoaliesAllTimeStatsBySeason({ seasonType })
    );
  }
}
