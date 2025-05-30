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
import { HomeService } from '../services';
import { HomeActions } from './home.actions';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private homeSummaryService: HomeService
  ) {}

  getUserTeamRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.getUserTeamRecordBySeasonAndSeasonType),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeSummaryService
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
        this.homeSummaryService
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
        this.homeSummaryService
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
}
