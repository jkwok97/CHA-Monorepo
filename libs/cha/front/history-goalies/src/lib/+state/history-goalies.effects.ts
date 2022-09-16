import { Injectable } from '@angular/core';
import { StatGoaliesHistoryDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { HistoryGoaliesService } from '../services';
import { HistoryGoaliesActions } from './history-goalies.actions';

@Injectable()
export class HistoryGoaliesEffects {
  constructor(
    private actions$: Actions,
    private historyGoaliesService: HistoryGoaliesService
  ) {}

  getAllTimeGoaliesStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HistoryGoaliesActions.getGoaliesStatsBySeason),
      exhaustMap((action) =>
        this.historyGoaliesService
          .getAllTimeGoaliesStatsBySeasonType(action.seasonType)
          .pipe(
            map((stats: StatGoaliesHistoryDto[]) =>
              HistoryGoaliesActions.getGoaliesStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(HistoryGoaliesActions.error()))
          )
      )
    )
  );

  getAllTimeGoaliesStatsSummed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HistoryGoaliesActions.getGoaliesStatsBySeasonSummed),
      exhaustMap((action) =>
        this.historyGoaliesService
          .getAllTimeGoaliesStatsBySeasonTypeSummed(action.seasonType)
          .pipe(
            map((stats: StatGoaliesHistoryDto[]) =>
              HistoryGoaliesActions.getGoaliesStatsBySeasonSummedSuccess({
                stats,
              })
            ),
            catchError(() => of(HistoryGoaliesActions.error()))
          )
      )
    )
  );
}
