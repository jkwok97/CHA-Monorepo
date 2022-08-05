import { Injectable } from '@angular/core';
import { LeagueDataDto, TeamDto } from '@cha/shared/entities';
import { LeagueDataService } from '@cha/shared/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { LeagueDataActions } from './league-data.actions';

@Injectable()
export class LeagueDataEffects {
  constructor(
    private actions$: Actions,
    private leagueDataService: LeagueDataService
  ) {}

  getLeagueData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDataActions.getLeagueData),
      exhaustMap((action) =>
        this.leagueDataService.getLeagueData().pipe(
          map((data: LeagueDataDto) =>
            LeagueDataActions.getLeagueDataSuccess({ data })
          ),
          catchError(() => of(LeagueDataActions.error()))
        )
      )
    )
  );

  getTeams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDataActions.getTeams),
      exhaustMap((action) =>
        this.leagueDataService.getTeams().pipe(
          map((teams: TeamDto[]) =>
            LeagueDataActions.getTeamsSuccess({ teams })
          ),
          catchError(() => of(LeagueDataActions.error()))
        )
      )
    )
  );
}
