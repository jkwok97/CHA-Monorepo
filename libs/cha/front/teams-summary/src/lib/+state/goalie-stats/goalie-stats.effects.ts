import { Injectable } from '@angular/core';
import { StatUserGoaliesHistoryDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { TeamsSummaryGoalieStatsService } from '../../services';
import { TeamsSummaryFacade } from '../summary/teams-summary.facade';
import { GoalieStatsActions } from './goalie-stats.actions';

@Injectable()
export class GoalieStatsEffects {
  constructor(
    private actions$: Actions,
    private teamsSummaryGoalieStatsService: TeamsSummaryGoalieStatsService,
    private teamsSummaryFacade: TeamsSummaryFacade
  ) {}

  getUserGoalieStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalieStatsActions.getUserGoaliesStatsBySeason),
      withLatestFrom(this.teamsSummaryFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.teamsSummaryGoalieStatsService
          .getUserGoaliesStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserGoaliesHistoryDto[]) =>
              GoalieStatsActions.getUserGoaliesStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(GoalieStatsActions.error()))
          )
      )
    )
  );

  getUserGoalieAllTimeStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalieStatsActions.getUserGoaliesAllTimeStatsBySeason),
      withLatestFrom(this.teamsSummaryFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.teamsSummaryGoalieStatsService
          .getUserGoaliesAllTimeStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserGoaliesHistoryDto[]) =>
              GoalieStatsActions.getUserGoaliesAllTimeStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(GoalieStatsActions.error()))
          )
      )
    )
  );
}
