import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AwardsSelectors } from './awards.selectors';
import { UserAwardDto } from '@cha/shared/entities';
import { State } from './awards.reducer';
import { AwardsActions } from './awards.actions';

@Injectable()
export class AwardsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    AwardsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    AwardsSelectors.selectLoaded
  );

  awards$: Observable<UserAwardDto[]> = this.store.select(
    AwardsSelectors.selectAll
  );

  constructor(private store: Store<State>) {}

  getUserAwards() {
    this.store.dispatch(AwardsActions.getUserAwards());
  }
}
