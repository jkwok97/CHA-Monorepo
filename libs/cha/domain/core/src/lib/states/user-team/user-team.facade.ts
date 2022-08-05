import { Injectable } from '@angular/core';
import { TeamDto } from '@cha/shared/entities';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserTeamActions } from './user-team.actions';
import { State } from './user-team.reducer';
import { UserTeamSelectors } from './user-team.selectors';

@Injectable()
export class UserTeamFacade {
  isLoading$: Observable<boolean> = this.store.select(
    UserTeamSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    UserTeamSelectors.selectLoaded
  );

  userTeams$: Observable<TeamDto[]> = this.store.select(
    UserTeamSelectors.selectTeams
  );

  currentUserTeam$: Observable<TeamDto | undefined> = this.store.select(
    UserTeamSelectors.selectActiveTeam
  );

  constructor(private store: Store<State>) {}

  get(userId: number) {
    this.store.dispatch(UserTeamActions.get({ userId }));
  }
}
