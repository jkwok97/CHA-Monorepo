import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './stats-team-all.reducer';
import { StatsTeamAllActions } from './stats-team-all.actions';
import { Observable } from 'rxjs';
import { StatsTeamAllSelectors } from './stats-team-all.selectors';
import { StatTeamAllDto } from '@cha/shared/entities';

@Injectable()
export class StatsTeamAllFacade {
  isLoading$: Observable<boolean> = this.store.select(
    StatsTeamAllSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    StatsTeamAllSelectors.selectLoaded
  );

  allStats$: Observable<StatTeamAllDto[] | null> = this.store.select(
    StatsTeamAllSelectors.selectAll
  );

  constructor(private store: Store<State>) {}

  getAllTeamStats() {
    this.store.dispatch(StatsTeamAllActions.getAll());
  }
}
