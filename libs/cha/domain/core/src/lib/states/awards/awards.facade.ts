import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AwardActions } from './awards.action';
import { AwardsSelectors } from './awards.selectors';
import { State } from './awards.reducer';
import { AwardDto } from '@cha/shared/entities';

@Injectable()
export class AwardsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    AwardsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    AwardsSelectors.selectLoaded
  );

  awards$: Observable<AwardDto[]> = this.store.select(
    AwardsSelectors.selectAwards
  );

  constructor(private store: Store<State>) {}

  getChampions() {
    this.store.dispatch(AwardActions.getChampions());
  }

  getScorers() {
    this.store.dispatch(AwardActions.getScorers());
  }

  getDefense() {
    this.store.dispatch(AwardActions.getDefense());
  }

  getRookies() {
    this.store.dispatch(AwardActions.getRookies());
  }

  getGoalies() {
    this.store.dispatch(AwardActions.getGoalies());
  }

  getGm() {
    this.store.dispatch(AwardActions.getGm());
  }

  getSeason() {
    this.store.dispatch(AwardActions.getSeason());
  }
}
