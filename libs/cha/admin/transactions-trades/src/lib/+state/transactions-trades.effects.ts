import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { GetTeamTransactionDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import {
  exhaustMap,
  map,
  catchError,
  of,
  withLatestFrom,
  delay,
  tap,
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
          .getTeam(
            action.team,
            data.current_year,
            data.current_draft_year.toString()
          )
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
          .getTeam(
            action.team,
            data.current_year,
            data.current_draft_year.toString()
          )
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

  setWaiverAcquisition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsTradesActions.setWaiverAcquisition),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.transactionsTradesService
          .setWaiverAcquisition(action.team, action.players, data.current_year)
          .pipe(
            map(() => TransactionsTradesActions.setWaiverAcquisitionSuccess()),
            catchError(() => of(TransactionsTradesActions.error()))
          )
      )
    )
  );

  setWaiverAcquisitionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TransactionsTradesActions.setWaiverAcquisitionSuccess),
        delay(200),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Waiver Acquisition',
            detail: 'Waiver Acquisition is completed',
          });
          this.transactionsTradesFacade.reset();
        })
      ),
    { dispatch: false }
  );

  setWaiverRelease$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsTradesActions.setWaiverRelease),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.transactionsTradesService
          .setWaiverRelease(action.team, action.players, data.current_year)
          .pipe(
            map(() => TransactionsTradesActions.setWaiverReleaseSuccess()),
            catchError(() => of(TransactionsTradesActions.error()))
          )
      )
    )
  );

  setWaiverReleaseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TransactionsTradesActions.setWaiverReleaseSuccess),
        delay(200),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Waiver Release',
            detail: 'Waiver Release is completed',
          });
          this.transactionsTradesFacade.reset();
        })
      ),
    { dispatch: false }
  );

  setTrade$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsTradesActions.setTrade),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.transactionsTradesService
          .setTrade(
            action.teamOne,
            action.teamTwo,
            action.teamOnePicks,
            action.teamTwoPicks,
            data.current_year
          )
          .pipe(
            map(() => TransactionsTradesActions.setTradeSuccess()),
            catchError(() => of(TransactionsTradesActions.error()))
          )
      )
    )
  );

  setTradeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TransactionsTradesActions.setTradeSuccess),
        delay(200),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Trade',
            detail: 'Trade is completed',
          });
          this.transactionsTradesFacade.reset();
        })
      ),
    { dispatch: false }
  );
}
