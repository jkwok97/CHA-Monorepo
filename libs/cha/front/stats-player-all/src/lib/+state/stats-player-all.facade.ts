import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './stats-player-all.reducer';
import { StatsPlayerAllActions } from './stats-player-all.actions';
import { Observable } from 'rxjs';
import { StatsPlayerAllSelectors } from './stats-player-all.selectors';
import { StatPlayerAllDto } from '@cha/shared/entities';

@Injectable()
export class StatsPlayerAllFacade {
  isLoading$: Observable<boolean> = this.store.select(
    StatsPlayerAllSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    StatsPlayerAllSelectors.selectLoaded
  );

  allStats$: Observable<StatPlayerAllDto[]> = this.store.select(
    StatsPlayerAllSelectors.selectAll
  );

  constructor(private store: Store<State>) {}

  getAllPlayerStats(season: string) {
    this.store.dispatch(StatsPlayerAllActions.getAll({ season }));
  }
}
