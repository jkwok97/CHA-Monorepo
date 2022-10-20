import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { GetTeamTransactionDto, WaiversDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import {
  exhaustMap,
  map,
  catchError,
  of,
  withLatestFrom,
} from 'rxjs';
import { TransactionsTradesService } from '../services';
import { TransactionsTradesActions } from './transactions-trades.actions';
import { TransactionsTradesFacade } from './transactions-trades.facade';

@Injectable()
export class TransactionsTradesEffects {
  constructor(
    private actions$: Actions,
    private transactionsTradesService: TransactionsTradesService,
    private transactionsTradesFacade: TransactionsTradesFacade,
    private leagueDataFacade: LeagueDataFacade,
    private messageService: MessageService
  ) {}

  getTeamOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsTradesActions.getTeamOne),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.transactionsTradesService
          .getTeam(action.team, data.current_year)
          .pipe(
            map((team: GetTeamTransactionDto) =>
              TransactionsTradesActions.getTeamOneSuccess({
                team,
              })
            ),
            catchError(() => of(TransactionsTradesActions.error()))
          )
      )
    )
  );

  getTeamTwo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsTradesActions.getTeamTwo),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.transactionsTradesService
          .getTeam(action.team, data.current_year)
          .pipe(
            map((team: GetTeamTransactionDto) =>
              TransactionsTradesActions.getTeamTwoSuccess({
                team,
              })
            ),
            catchError(() => of(TransactionsTradesActions.error()))
          )
      )
    )
  );
}
