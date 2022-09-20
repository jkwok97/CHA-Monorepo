import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import {
  NhlGoalieStatDto,
  NhlPlayerStatDto,
  SalariesAndRatingsDto,
  StatGoalieAllDto,
  StatPlayerAllDto,
  StatUserTeamRecordDto,
} from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { HomeSummaryService } from '../services';
import { HomeSummaryActions } from './home-summary.actions';

@Injectable()
export class HomeSummaryEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private homeSummaryService: HomeSummaryService
  ) {}

  getUserTeamRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonType),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeSummaryService
          .getUserTeamRecordBySeasonAndSeasonType(
            action.teamId,
            data.offseason ? data.prev_year : data.current_year,
            data.current_season_type
          )
          .pipe(
            map((record: StatUserTeamRecordDto) =>
              HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonTypeSuccess({
                record,
              })
            ),
            catchError(() => of(HomeSummaryActions.error()))
          )
      )
    )
  );

  getUserTeamPlayerSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeSummaryActions.getUserTeamPlayerSalaries),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeSummaryService
          .getUserTeamPlayersSalariesBySeason(
            action.teamName,
            data.offseason ? data.prev_year : data.current_year
          )
          .pipe(
            map((playerSalaries: SalariesAndRatingsDto[]) =>
              HomeSummaryActions.getUserTeamPlayerSalariesSuccess({
                playerSalaries,
              })
            ),
            catchError(() => of(HomeSummaryActions.error()))
          )
      )
    )
  );

  getUserTeamGoaliesSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeSummaryActions.getUserTeamGoaliesSalaries),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeSummaryService
          .getUserTeamGoaliesSalariesBySeason(
            action.teamName,
            data.offseason ? data.prev_year : data.current_year
          )
          .pipe(
            map((goalieSalaries: SalariesAndRatingsDto[]) =>
              HomeSummaryActions.getUserTeamGoaliesSalariesSuccess({
                goalieSalaries,
              })
            ),
            catchError(() => of(HomeSummaryActions.error()))
          )
      )
    )
  );

  getCHACurrentPlayerStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeSummaryActions.getCHACurrentPlayerStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeSummaryService
          .getCHACurrentPlayerStatsByPlayerId(
            data.offseason ? data.prev_year : data.current_year,
            data.current_season_type,
            action.playerId
          )
          .pipe(
            map((stats: StatPlayerAllDto[]) =>
              HomeSummaryActions.getCHACurrentPlayerStatsSuccess({
                stats,
              })
            ),
            catchError(() => of(HomeSummaryActions.error()))
          )
      )
    )
  );

  getCHACurrentGoalieStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeSummaryActions.getCHACurrentGoalieStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeSummaryService
          .getCHACurrentGoalieStatsByPlayerId(
            data.offseason ? data.prev_year : data.current_year,
            data.current_season_type,
            action.playerId
          )
          .pipe(
            map((stats: StatGoalieAllDto[]) =>
              HomeSummaryActions.getCHACurrentGoalieStatsSuccess({
                stats,
              })
            ),
            catchError(() => of(HomeSummaryActions.error()))
          )
      )
    )
  );

  getNHLCurrentStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeSummaryActions.getNHLCurrentStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeSummaryService
          .getNHLCurrentStatsByPlayerId(action.playerId, data.nhl_year)
          .pipe(
            map((stats: NhlGoalieStatDto[] | NhlPlayerStatDto[]) =>
              HomeSummaryActions.getNHLCurrentStatsSuccess({
                stats,
              })
            ),
            catchError(() => of(HomeSummaryActions.error()))
          )
      )
    )
  );
}
