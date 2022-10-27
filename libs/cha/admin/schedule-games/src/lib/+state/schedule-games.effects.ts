import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { ScheduleAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import {
  withLatestFrom,
  exhaustMap,
  map,
  catchError,
  of,
  delay,
  tap,
} from 'rxjs';
import { ScheduleGamesService } from '../services';
import { ScheduleGamesActions } from './schedule-games.actions';

@Injectable()
export class ScheduleGamesEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private scheduleGamesService: ScheduleGamesService,
    private messageService: MessageService
  ) {}

  getSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleGamesActions.getAll),
      delay(500),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.scheduleGamesService.getSchedule(data.current_year).pipe(
          map((schedule: ScheduleAllDto[]) =>
            ScheduleGamesActions.getAllSuccess({
              schedule,
            })
          ),
          catchError(() => of(ScheduleGamesActions.error()))
        )
      )
    )
  );

  saveGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleGamesActions.saveGame),
      delay(500),
      exhaustMap((action) =>
        this.scheduleGamesService.saveGame(action.game).pipe(
          map((game: ScheduleAllDto) =>
            ScheduleGamesActions.saveGameSuccess({
              game,
            })
          ),
          catchError(() => of(ScheduleGamesActions.error()))
        )
      )
    )
  );

  saveGameSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ScheduleGamesActions.saveGameSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update Game',
            detail: 'Game has been updated',
          });
        })
      ),
    { dispatch: false }
  );
}
