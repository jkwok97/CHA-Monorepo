import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-users.reducer';
import { LeagueUsersActions } from './league-users.actions';
import { Observable } from 'rxjs';
import { LeagueUsersSelectors } from './league-users.selectors';
import { UserDto } from '@cha/shared/entities';

@Injectable()
export class LeagueSalariesAndRatingsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectLoaded
  );

  users$: Observable<UserDto[]> = this.store.select(
    LeagueUsersSelectors.selectUsers
  );

  constructor(private store: Store<State>) {}

  getUsers() {
    this.store.dispatch(LeagueUsersActions.getUsers());
  }
}
