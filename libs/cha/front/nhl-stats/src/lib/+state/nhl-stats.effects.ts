import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { NhlStatsService } from '../services';
import { NhlStatsActions } from './nhl-stats.actions';

@Injectable()
export class NhlStatsEffects {
  constructor(
    private actions$: Actions,
    private nhlService: NhlStatsService,
    private leagueDataFacade: LeagueDataFacade
  ) {}

  getSportnetStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NhlStatsActions.getSportsnetStats),
      exhaustMap((action) =>
        this.nhlService
          .getNHLSummarySportsnet(action.season, action.season_type)
          .pipe(
            map(({ skaters, goalies }) =>
              NhlStatsActions.getSportsnetStatsSuccess({ skaters, goalies })
            ),
            catchError(() => of(NhlStatsActions.error()))
          )
      )
    )
  );

  getRookieStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NhlStatsActions.getRookieStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.nhlService
          .getNHLRookiesummary(
            data.nhl_year,
            action.statType,
            action.sortType,
            action.sortOrder,
            action.start,
            action.pageSize
          )
          .pipe(
            map(({ stats, total }) =>
              NhlStatsActions.getRookieStatsSuccess({ stats, total })
            ),
            catchError(() => of(NhlStatsActions.error()))
          )
      )
    )
  );
}
