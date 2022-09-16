import { Injectable } from '@angular/core';
import { StatPlayersHistoryDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { HistoryPlayersService } from '../services';
import { HistoryPlayersActions } from './history-players.actions';

@Injectable()
export class HistoryPlayersEffects {
  constructor(
    private actions$: Actions,
    private historyPlayersService: HistoryPlayersService
  ) {}

  getAllTimePlayersStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HistoryPlayersActions.getPlayersStatsBySeason),
      exhaustMap((action) =>
        this.historyPlayersService
          .getAllTimePlayersStatsBySeasonType(action.seasonType)
          .pipe(
            map((stats: StatPlayersHistoryDto[]) =>
              HistoryPlayersActions.getPlayersStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(HistoryPlayersActions.error()))
          )
      )
    )
  );

  getAllTimePlayersStatsSummed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HistoryPlayersActions.getPlayersStatsBySeasonSummed),
      exhaustMap((action) =>
        this.historyPlayersService
          .getAllTimePlayersStatsBySeasonTypeSummed(action.seasonType)
          .pipe(
            map((stats: StatPlayersHistoryDto[]) =>
              HistoryPlayersActions.getPlayersStatsBySeasonSummedSuccess({
                stats,
              })
            ),
            catchError(() => of(HistoryPlayersActions.error()))
          )
      )
    )
  );
}
