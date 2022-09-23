import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import {
  StatUserTeamRecordDto,
  SalariesAndRatingsDto,
  StatPlayerAllDto,
  StatGoalieAllDto,
  NhlGoalieStatDto,
  NhlPlayerStatDto,
} from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { TeamsSummaryService } from '../../services';
import { TeamsSummaryActions } from './teams-summary.actions';

@Injectable()
export class TeamsSummaryEffects {
  constructor(
    private actions$: Actions,
    private teamsSummaryService: TeamsSummaryService,
    private leagueDataFacade: LeagueDataFacade
  ) {}

  getUserIdByTeamId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamsSummaryActions.getUserIdByTeamId),
      exhaustMap((action) =>
        this.teamsSummaryService.getUserIdByTeamId(action.teamId).pipe(
          map((userId) =>
            TeamsSummaryActions.getUserIdByTeamIdSuccess({
              userId,
            })
          ),
          catchError(() => of(TeamsSummaryActions.error()))
        )
      )
    )
  );

  getUserTeamRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamsSummaryActions.getUserTeamRecordBySeasonAndSeasonType),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.teamsSummaryService
          .getUserTeamRecordBySeasonAndSeasonType(
            action.teamId,
            data.offseason ? data.prev_year : data.current_year,
            data.current_season_type
          )
          .pipe(
            map((record: StatUserTeamRecordDto) =>
              TeamsSummaryActions.getUserTeamRecordBySeasonAndSeasonTypeSuccess(
                {
                  record,
                }
              )
            ),
            catchError(() => of(TeamsSummaryActions.error()))
          )
      )
    )
  );

  getUserTeamPlayerSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamsSummaryActions.getUserTeamPlayerSalaries),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.teamsSummaryService
          .getUserTeamPlayersSalariesBySeason(
            action.teamName,
            data.current_year,
            data.offseason ? data.prev_year : data.current_year
          )
          .pipe(
            map((playerSalaries: SalariesAndRatingsDto[]) =>
              TeamsSummaryActions.getUserTeamPlayerSalariesSuccess({
                playerSalaries,
              })
            ),
            catchError(() => of(TeamsSummaryActions.error()))
          )
      )
    )
  );

  getUserTeamGoaliesSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamsSummaryActions.getUserTeamGoaliesSalaries),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.teamsSummaryService
          .getUserTeamGoaliesSalariesBySeason(
            action.teamName,
            data.current_year,
            data.offseason ? data.prev_year : data.current_year
          )
          .pipe(
            map((goalieSalaries: SalariesAndRatingsDto[]) =>
              TeamsSummaryActions.getUserTeamGoaliesSalariesSuccess({
                goalieSalaries,
              })
            ),
            catchError(() => of(TeamsSummaryActions.error()))
          )
      )
    )
  );

  getCHACurrentPlayerStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamsSummaryActions.getCHACurrentPlayerStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.teamsSummaryService
          .getCHACurrentPlayerStatsByPlayerId(
            data.offseason ? data.prev_year : data.current_year,
            data.current_season_type,
            action.playerId
          )
          .pipe(
            map((stats: StatPlayerAllDto[]) =>
              TeamsSummaryActions.getCHACurrentPlayerStatsSuccess({
                stats,
              })
            ),
            catchError(() => of(TeamsSummaryActions.error()))
          )
      )
    )
  );

  getCHACurrentGoalieStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamsSummaryActions.getCHACurrentGoalieStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.teamsSummaryService
          .getCHACurrentGoalieStatsByPlayerId(
            data.offseason ? data.prev_year : data.current_year,
            data.current_season_type,
            action.playerId
          )
          .pipe(
            map((stats: StatGoalieAllDto[]) =>
              TeamsSummaryActions.getCHACurrentGoalieStatsSuccess({
                stats,
              })
            ),
            catchError(() => of(TeamsSummaryActions.error()))
          )
      )
    )
  );

  getNHLCurrentStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamsSummaryActions.getNHLCurrentStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.teamsSummaryService
          .getNHLCurrentStatsByPlayerId(action.playerId, data.nhl_year)
          .pipe(
            map((stats: NhlGoalieStatDto[] | NhlPlayerStatDto[]) =>
              TeamsSummaryActions.getNHLCurrentStatsSuccess({
                stats,
              })
            ),
            catchError(() => of(TeamsSummaryActions.error()))
          )
      )
    )
  );
}
