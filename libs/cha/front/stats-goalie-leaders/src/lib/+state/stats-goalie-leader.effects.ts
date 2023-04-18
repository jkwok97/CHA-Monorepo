import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatGoalieLeadersDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { StatsGoalieLeadersService } from '../services';
import { LeagueStatsGoaliesActions } from './stats-goalie-leaders.actions';

@Injectable()
export class LeagueStatsGoaliesEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private goaliesStatsService: StatsGoalieLeadersService
  ) {}

  getGoalieLeaderStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueStatsGoaliesActions.getLeaders),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.goaliesStatsService
          .getAllGoalieLeaders(
            data.current_year,
            action.seasonType,
            data.min_games.toString()
          )
          .pipe(
            map((leaders: StatGoalieLeadersDto) =>
              LeagueStatsGoaliesActions.getLeadersSuccess({
                leaders,
              })
            ),
            catchError(() => of(LeagueStatsGoaliesActions.error()))
          )
      )
    )
  );
}
