import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { ScheduleAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, map, catchError, of, delay } from 'rxjs';
import { ScheduleGamesService } from '../services';
import { ScheduleGamesActions } from './schedule-games.actions';

@Injectable()
export class ScheduleGamesEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private scheduleGamesService: ScheduleGamesService
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
}
