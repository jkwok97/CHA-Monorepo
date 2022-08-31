import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatGoalieAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, map, catchError, of } from 'rxjs';
import { StatsGoalieAllService } from '../services';
import { StatsGoalieAllActions } from './stats-goalie-all.actions';

@Injectable()
export class StatsGoalieAllEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private goalieStatsAllService: StatsGoalieAllService
  ) {}

  getAllTeamStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatsGoalieAllActions.getAll),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.goalieStatsAllService
          .getAllGoalieStats(data.current_year, action.season)
          .pipe(
            map((stats: StatGoalieAllDto[]) =>
              StatsGoalieAllActions.getAllSuccess({
                stats,
              })
            ),
            catchError(() => of(StatsGoalieAllActions.error()))
          )
      )
    )
  );
}
