import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamInfoService } from '@cha/shared/services';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UserTeamActions } from './user-team.actions';
import { TeamDto } from '@cha/shared/entities';

@Injectable()
export class UserTeamEffects {
  constructor(
    private actions$: Actions,
    private teamInfoService: TeamInfoService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserTeamActions.get),
      exhaustMap((action) =>
        this.teamInfoService.getUserTeams(action.userId).pipe(
          map((userTeams: TeamDto[]) =>
            UserTeamActions.getSuccess({ userTeams })
          ),
          catchError(() => of(UserTeamActions.error()))
        )
      )
    )
  );
}
