import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './auth.reducer';
import { authActions } from './auth.actions';
import { authQuery } from './auth.selectors';
import { Observable } from 'rxjs';
import { UserDto } from '@cha/shared/entities';

@Injectable()
export class AuthFacade {
  state$: Observable<State> = this.store.select(authQuery.selectState);
  user$: Observable<UserDto | null> = this.store.select(
    authQuery.selectUserData
  );

  loggingIn$: Observable<boolean> = this.store.select(
    authQuery.selectLoggingIn
  );

  loggingInComplete$: Observable<boolean> = this.store.select(
    authQuery.selectLoggingIncomplete
  );

  userId$: Observable<number | undefined> = this.store.select(
    authQuery.selectUserId
  );

  constructor(private store: Store<State>) {}

  init() {
    this.store.dispatch(authActions.init());
  }

  login(email: string) {
    this.store.dispatch(authActions.login({ email }));
  }

  logout() {
    this.store.dispatch(authActions.logout());
  }

  loginFailed() {
    this.store.dispatch(authActions.loginFailed());
  }

  loginSuccess(user: UserDto) {
    this.store.dispatch(
      authActions.loginSuccess({
        user,
      })
    );
  }
}
