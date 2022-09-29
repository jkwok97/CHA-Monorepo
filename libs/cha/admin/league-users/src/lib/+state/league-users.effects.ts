import { Injectable } from '@angular/core';
import { UserDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { LeagueUsersService } from '../services';
import { LeagueUsersActions } from './league-users.actions';
import { LeagueUsersFacade } from './league-users.facade';

@Injectable()
export class LeagueUsersEffects {
  constructor(
    private actions$: Actions,
    private leagueUsersService: LeagueUsersService,
    private leagueUsersFacade: LeagueUsersFacade
  ) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueUsersActions.getUsers),
      exhaustMap((action) =>
        this.leagueUsersService.getUsers().pipe(
          map((users: UserDto[]) =>
            LeagueUsersActions.getUsersSuccess({
              users,
            })
          ),
          catchError(() => of(LeagueUsersActions.error()))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueUsersActions.addUser),
      exhaustMap((action) =>
        this.leagueUsersService.addUser(action.user).pipe(
          map((user: UserDto) =>
            LeagueUsersActions.addUserSuccess({
              user,
            })
          ),
          catchError(() => of(LeagueUsersActions.error()))
        )
      )
    )
  );

  addUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueUsersActions.addUserSuccess),
        tap(() => this.leagueUsersFacade.getUsers())
      ),
    { dispatch: false }
  );

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueUsersActions.editUser),
      exhaustMap((action) =>
        this.leagueUsersService.editUser(action.user).pipe(
          map((user: UserDto) =>
            LeagueUsersActions.editUserSuccess({
              user,
            })
          ),
          catchError(() => of(LeagueUsersActions.error()))
        )
      )
    )
  );

  editUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueUsersActions.editUserSuccess),
        tap(() => this.leagueUsersFacade.getUsers())
      ),
    { dispatch: false }
  );
}
