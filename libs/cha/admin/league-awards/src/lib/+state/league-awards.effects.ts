import { Injectable } from '@angular/core';
import { AwardDto, DivisionDto, TeamDto, UserDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { LeagueAwardsService } from '../services';
import { LeagueAwardsActions } from './league-awards.actions';
import { LeagueAwardsFacade } from './league-awards.facade';

@Injectable()
export class LeagueAwardsEffects {
  constructor(
    private actions$: Actions,
    private leagueAwardsService: LeagueAwardsService,
    private leagueAwardsFacade: LeagueAwardsFacade,
    private messageService: MessageService
  ) {}

  getAwards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueAwardsActions.getAwards),
      exhaustMap((action) =>
        this.leagueAwardsService.getAll().pipe(
          map((awards: AwardDto[]) =>
            LeagueAwardsActions.getAwardsSuccess({
              awards,
            })
          ),
          catchError(() => of(LeagueAwardsActions.error()))
        )
      )
    )
  );

  addAward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueAwardsActions.addAward),
      exhaustMap((action) =>
        this.leagueAwardsService.addAward(action.award).pipe(
          map((award: AwardDto) =>
            LeagueAwardsActions.addAwardSuccess({
              award,
            })
          ),
          catchError(() => of(LeagueAwardsActions.error()))
        )
      )
    )
  );

  addTeamSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueAwardsActions.addAwardSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Award',
            detail: 'Award has been added',
          });
          this.leagueAwardsFacade.getAwards();
        })
      ),
    { dispatch: false }
  );

  editTeam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueAwardsActions.editAward),
      exhaustMap((action) =>
        this.leagueAwardsService.editAward(action.award).pipe(
          map((award: AwardDto) =>
            LeagueAwardsActions.editAwardSuccess({
              award,
            })
          ),
          catchError(() => of(LeagueAwardsActions.error()))
        )
      )
    )
  );

  editTeamSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueAwardsActions.editAwardSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Award',
            detail: 'Award has been updated',
          });
          this.leagueAwardsFacade.getAwards();
        })
      ),
    { dispatch: false }
  );

  deleteAward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueAwardsActions.deleteAward),
      exhaustMap((action) =>
        this.leagueAwardsService.deleteAward(action.awardId).pipe(
          map((award: AwardDto) =>
            LeagueAwardsActions.deleteAwardSuccess({
              award,
            })
          ),
          catchError(() => of(LeagueAwardsActions.error()))
        )
      )
    )
  );

  deleteTeamSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueAwardsActions.deleteAwardSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Delete Award',
            detail: 'Award has been removed',
          });
          this.leagueAwardsFacade.getAwards();
        })
      ),
    { dispatch: false }
  );

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueAwardsActions.getUsers),
      exhaustMap((action) =>
        this.leagueAwardsService.getUsers().pipe(
          map((users: UserDto[]) =>
            LeagueAwardsActions.getUsersSuccess({
              users,
            })
          ),
          catchError(() => of(LeagueAwardsActions.error()))
        )
      )
    )
  );
}
