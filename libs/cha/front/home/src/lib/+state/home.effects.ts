import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import {
  GetTransactionDto,
  SalariesAndRatingsDto,
  StatUserTeamRecordDto,
} from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { HomeService } from '../services';
import { HomeActions } from './home.actions';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private homeService: HomeService
  ) {}

  getUserTeamRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.getUserTeamRecordBySeasonAndSeasonType),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeService
          .getUserTeamRecordBySeasonAndSeasonType(
            action.teamId,
            data.current_year,
            data.current_season_type
          )
          .pipe(
            map((record: StatUserTeamRecordDto) =>
              HomeActions.getUserTeamRecordBySeasonAndSeasonTypeSuccess({
                record,
              })
            ),
            catchError(() => of(HomeActions.error()))
          )
      )
    )
  );

  getUserTeamPlayerSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.getUserTeamPlayerSalaries),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeService
          .getUserTeamPlayersSalariesBySeason(
            action.teamName,
            data.current_year,
            data.offseason ? data.prev_year : data.current_year
          )
          .pipe(
            map((playerSalaries: SalariesAndRatingsDto[]) =>
              HomeActions.getUserTeamPlayerSalariesSuccess({
                playerSalaries,
              })
            ),
            catchError(() => of(HomeActions.error()))
          )
      )
    )
  );

  getUserTeamGoaliesSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.getUserTeamGoaliesSalaries),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeService
          .getUserTeamGoaliesSalariesBySeason(
            action.teamName,
            data.current_year,
            data.offseason ? data.prev_year : data.current_year
          )
          .pipe(
            map((goalieSalaries: SalariesAndRatingsDto[]) =>
              HomeActions.getUserTeamGoaliesSalariesSuccess({
                goalieSalaries,
              })
            ),
            catchError(() => of(HomeActions.error()))
          )
      )
    )
  );

  getTrades$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.getTrades),
      exhaustMap((action) =>
        this.homeService.getTransactions(action.season).pipe(
          map((transactions: GetTransactionDto[]) =>
            HomeActions.getTradesSuccess({
              transactions,
            })
          ),
          catchError(() => of(HomeActions.error()))
        )
      )
    )
  );
}
