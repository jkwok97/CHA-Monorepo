import { Injectable } from '@angular/core';
import { DivisionDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { LeagueDivisionsService } from '../services';
import { LeagueDivisionsActions } from './league-divisions.actions';
import { LeagueDivisionsFacade } from './league-divisions.facade';

@Injectable()
export class LeagueDivisionsEffects {
  constructor(
    private actions$: Actions,
    private leagueDivisionsService: LeagueDivisionsService,
    private leagueDivisionsFacade: LeagueDivisionsFacade,
    private messageService: MessageService
  ) {}

  getDivisions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDivisionsActions.getDivisions),
      exhaustMap((action) =>
        this.leagueDivisionsService.getDivisions().pipe(
          map((divisions: DivisionDto[]) =>
            LeagueDivisionsActions.getDivisionsSuccess({
              divisions,
            })
          ),
          catchError(() => of(LeagueDivisionsActions.error()))
        )
      )
    )
  );

  addDivision$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDivisionsActions.addDivision),
      exhaustMap((action) =>
        this.leagueDivisionsService.addDivisions(action.division).pipe(
          map((division: DivisionDto) =>
            LeagueDivisionsActions.addDivisionSuccess({
              division,
            })
          ),
          catchError(() => of(LeagueDivisionsActions.error()))
        )
      )
    )
  );

  addDivisionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueDivisionsActions.addDivisionSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Division',
            detail: 'Division has been added',
          });
          this.leagueDivisionsFacade.getDivisions();
        })
      ),
    { dispatch: false }
  );

  editDivision$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDivisionsActions.editDivision),
      exhaustMap((action) =>
        this.leagueDivisionsService.editDivisions(action.division).pipe(
          map((division: DivisionDto) =>
            LeagueDivisionsActions.editDivisionSuccess({
              division,
            })
          ),
          catchError(() => of(LeagueDivisionsActions.error()))
        )
      )
    )
  );

  editDivisionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueDivisionsActions.editDivisionSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Division',
            detail: 'Division has been updated',
          });
          this.leagueDivisionsFacade.getDivisions();
        })
      ),
    { dispatch: false }
  );

  deleteDevision$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDivisionsActions.deleteDivision),
      exhaustMap((action) =>
        this.leagueDivisionsService.deleteDivisions(action.divisionId).pipe(
          map((division: DivisionDto) =>
            LeagueDivisionsActions.deleteDivisionSuccess({
              division,
            })
          ),
          catchError(() => of(LeagueDivisionsActions.error()))
        )
      )
    )
  );

  deleteDivisionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueDivisionsActions.deleteDivisionSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Delete Division',
            detail: 'Division has been removed',
          });
          this.leagueDivisionsFacade.getDivisions();
        })
      ),
    { dispatch: false }
  );
}
