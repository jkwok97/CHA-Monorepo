import { Injectable } from '@angular/core';
import { GetTransactionDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { LeagueTradesService } from '../services';
import { LeagueTradesActions } from './league-trades.actions';

@Injectable()
export class GamesCurrentEffects {
  constructor(
    private actions$: Actions,
    private leagueTradesService: LeagueTradesService
  ) {}

  getCurrentGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueTradesActions.getTrades),
      exhaustMap((action) =>
        this.leagueTradesService.getTransactions(action.season).pipe(
          map((transactions: GetTransactionDto[]) =>
            LeagueTradesActions.getTradesSuccess({
              transactions,
            })
          ),
          catchError(() => of(LeagueTradesActions.error()))
        )
      )
    )
  );
}
