import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatTeamAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, map, catchError, of } from 'rxjs';
import { StatsTeamAllService } from '../services';
import { StatsTeamAllActions } from './stats-team-all.actions';

@Injectable()
export class StatsTeamAllEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private teamStatsService: StatsTeamAllService
  ) {}

  getAllTeamStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatsTeamAllActions.getAll),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.teamStatsService
          .getAllTeamStats(data.current_year, action.season)
          .pipe(
            map((stats: StatTeamAllDto[]) =>
              StatsTeamAllActions.getAllSuccess({
                stats,
              })
            ),
            catchError(() => of(StatsTeamAllActions.error()))
          )
      )
    )
  );
}
