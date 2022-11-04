import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { ScheduleAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, map, catchError, of } from 'rxjs';
import { GamesAllService } from '../services';
import { GamesAllActions } from './games-all.actions';

@Injectable()
export class GamesAllEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private gamesAllService: GamesAllService
  ) {}

  getSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesAllActions.getAll),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.gamesAllService.getSchedule(data.current_year).pipe(
          map((schedule: ScheduleAllDto[]) =>
            GamesAllActions.getAllSuccess({
              schedule,
            })
          ),
          catchError(() => of(GamesAllActions.error()))
        )
      )
    )
  );

  getBoxScore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesAllActions.getBoxScore),
      exhaustMap((action) =>
        this.gamesAllService
          .getBoxScore(action.gameId, action.playingYear)
          .pipe(
            map((game: File) => GamesAllActions.getBoxScoreSuccess({ game })),
            catchError(() => of(GamesAllActions.getBoxScoreError()))
          )
      )
    )
  );
}
