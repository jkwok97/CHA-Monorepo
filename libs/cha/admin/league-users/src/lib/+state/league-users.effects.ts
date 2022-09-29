import { Injectable } from '@angular/core';
import { UserDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { LeagueUsersService } from '../services';
import { LeagueUsersActions } from './league-users.actions';

@Injectable()
export class LeagueUsersEffects {
  constructor(
    private actions$: Actions,
    private leagueUsersService: LeagueUsersService
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
}
