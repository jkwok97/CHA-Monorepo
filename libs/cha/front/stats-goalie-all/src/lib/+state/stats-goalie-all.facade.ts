import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './stats-goalie-all.reducer';
import { StatsGoalieAllActions } from './stats-goalie-all.actions';
import { Observable } from 'rxjs';
import { StatsGoalieAllSelectors } from './stats-goalie-all.selectors';
import { StatGoalieAllDto } from '@cha/shared/entities';

@Injectable()
export class StatsPlayerAllFacade {
  isLoading$: Observable<boolean> = this.store.select(
    StatsGoalieAllSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    StatsGoalieAllSelectors.selectLoaded
  );

  allStats$: Observable<StatGoalieAllDto[]> = this.store.select(
    StatsGoalieAllSelectors.selectAll
  );

  total$: Observable<number> = this.store.select(
    StatsGoalieAllSelectors.selectTotal
  );

  constructor(private store: Store<State>) {}

  getAllPlayerStats(season: string) {
    this.store.dispatch(StatsGoalieAllActions.getAll({ season }));
  }
}
