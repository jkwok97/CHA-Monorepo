import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './games-all.reducer';
import { GamesAllActions } from './games-all.actions';
import { Observable } from 'rxjs';
import { GamesAllSelectors } from './games-all.selectors';
import { ScheduleAllDto } from '@cha/shared/entities';

@Injectable()
export class GamesAllFacade {
  isLoading$: Observable<boolean> = this.store.select(
    GamesAllSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    GamesAllSelectors.selectLoaded
  );

  schedule$: Observable<ScheduleAllDto[]> = this.store.select(
    GamesAllSelectors.selectSchedule
  );

  constructor(private store: Store<State>) {}

  getSchedule(season: string) {
    this.store.dispatch(GamesAllActions.getAll({ season }));
  }
}
