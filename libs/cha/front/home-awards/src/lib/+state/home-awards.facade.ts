import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './home-awards.reducer';
import { HomeAwardsActions } from './home-awards.actions';
import { Observable } from 'rxjs';
import { HomeAwardsSelectors } from './home-awards.selectors';
import { UserAwardDto } from '@cha/shared/entities';

@Injectable()
export class HomeAwardsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    HomeAwardsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    HomeAwardsSelectors.selectLoaded
  );

  awards$: Observable<UserAwardDto[]> = this.store.select(
    HomeAwardsSelectors.selectAll
  );

  constructor(private store: Store<State>) {}

  getUserAwards() {
    this.store.dispatch(HomeAwardsActions.getUserAwards());
  }
}
