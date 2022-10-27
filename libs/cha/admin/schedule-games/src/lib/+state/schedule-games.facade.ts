import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './schedule-games.reducer';
import { ScheduleGamesActions } from './schedule-games.actions';
import { Observable } from 'rxjs';
import { ScheduleGamesSelectors } from './schedule-games.selectors';
import { ScheduleAllDto } from '@cha/shared/entities';

@Injectable()
export class ScheduleGamesFacade {
  isLoading$: Observable<boolean> = this.store.select(
    ScheduleGamesSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    ScheduleGamesSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    ScheduleGamesSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    ScheduleGamesSelectors.selectSaved
  );

  schedule$: Observable<ScheduleAllDto[]> = this.store.select(
    ScheduleGamesSelectors.selectSchedule
  );

  season$: Observable<string> = this.store.select(
    ScheduleGamesSelectors.selectSeason
  );

  constructor(private store: Store<State>) {}

  getSchedule() {
    this.store.dispatch(ScheduleGamesActions.getAll());
  }
}
