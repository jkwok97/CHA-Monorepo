import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatPlayerAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, map, catchError, of } from 'rxjs';
import { StatsPlayerAllService } from '../services';
import { StatsPlayerAllActions } from './stats-player-all.actions';

@Injectable()
export class StatsPlayerAllEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private playerStatsAllService: StatsPlayerAllService
  ) {}

  getAllTeamStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatsPlayerAllActions.getAll),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.playerStatsAllService
          .getAllPlayerStats(
            data.offseason ? data.prev_year : data.current_year,
            action.season
          )
          .pipe(
            map((stats: StatPlayerAllDto[]) =>
              StatsPlayerAllActions.getAllSuccess({
                stats,
              })
            ),
            catchError(() => of(StatsPlayerAllActions.error()))
          )
      )
    )
  );
}
