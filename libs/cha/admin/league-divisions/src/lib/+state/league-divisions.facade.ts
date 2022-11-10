import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-divisions.reducer';
import { LeagueUsersActions } from './league-users.actions';
import { Observable } from 'rxjs';
import { LeagueUsersSelectors } from './league-divisions.selectors';
import { UserCreateDto, UserDto } from '@cha/shared/entities';

@Injectable()
export class LeagueUsersFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectSaved
  );

  users$: Observable<UserDto[]> = this.store.select(
    LeagueUsersSelectors.selectUsers
  );

  constructor(private store: Store<State>) {}

  getUsers() {
    this.store.dispatch(LeagueUsersActions.getUsers());
  }

  addUser(user: UserCreateDto) {
    this.store.dispatch(LeagueUsersActions.addUser({ user }));
  }

  editUser(user: UserCreateDto, userId: number) {
    this.store.dispatch(LeagueUsersActions.editUser({ user, userId }));
  }

  deleteUser(userId: number) {
    this.store.dispatch(LeagueUsersActions.deleteUser({ userId }));
  }
}
