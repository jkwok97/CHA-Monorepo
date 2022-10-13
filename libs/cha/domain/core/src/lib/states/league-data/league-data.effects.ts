import { Injectable } from '@angular/core';
import { LeagueDataDto, TeamDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { LeagueDataService } from '../../services';
import { LeagueDataActions } from './league-data.actions';
import { LeagueDataFacade } from './league-data.facade';
import { MessageService } from 'primeng/api';

@Injectable()
export class LeagueDataEffects {
  constructor(
    private actions$: Actions,
    private leagueDataService: LeagueDataService,
    private leagueDataFacade: LeagueDataFacade,
    private messageService: MessageService
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

  editData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDataActions.editData),
      exhaustMap((action) =>
        this.leagueDataService.editData(action.data).pipe(
          map((data: LeagueDataDto) =>
            LeagueDataActions.editDataSuccess({
              data,
            })
          ),
          catchError(() => of(LeagueDataActions.error()))
        )
      )
    )
  );

  editUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueDataActions.editDataSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Data',
            detail: 'Data has been updated',
          });
          this.leagueDataFacade.getLeagueData();
        })
      ),
    { dispatch: false }
  );
}
