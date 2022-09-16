import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './history-goalies.reducer';
import { HistoryGoaliesActions } from './history-goalies.actions';
import { Observable } from 'rxjs';
import { HistoryGoaliesSelectors } from './history-goalies.selectors';
import { StatGoaliesHistoryDto } from '@cha/shared/entities';

@Injectable()
export class HistoryGoaliesFacade {
  isLoading$: Observable<boolean> = this.store.select(
    HistoryGoaliesSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    HistoryGoaliesSelectors.selectLoaded
  );

  allStats$: Observable<StatGoaliesHistoryDto[]> = this.store.select(
    HistoryGoaliesSelectors.selectAll
  );

  constructor(private store: Store<State>) {}

  getAllTimeGoaliesStatBySeason(seasonType: string) {
    this.store.dispatch(
      HistoryGoaliesActions.getGoaliesStatsBySeason({ seasonType })
    );
  }

  getAllTimeGoaliesStatSummedBySeason(seasonType: string) {
    this.store.dispatch(
      HistoryGoaliesActions.getGoaliesStatsBySeasonSummed({ seasonType })
    );
  }
}
