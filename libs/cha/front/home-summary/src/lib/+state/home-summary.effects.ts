import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import {
  SalariesAndRatingsDto,
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
            data.current_year,
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
          .getUserTeamPlayersSalariesBySeason(action.teamName, '2021-22')
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
          .getUserTeamGoaliesSalariesBySeason(action.teamName, '2021-22')
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
}
