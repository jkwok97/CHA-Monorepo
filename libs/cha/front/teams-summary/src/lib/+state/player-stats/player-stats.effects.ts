import { Injectable } from '@angular/core';
import { StatUserPlayersHistoryDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { TeamsSummaryPlayerStatsService } from '../../services';
import { TeamsSummaryFacade } from '../summary/teams-summary.facade';
import { PlayerStatsActions } from './player-stats.actions';

@Injectable()
export class PlayerStatsEffects {
  constructor(
    private actions$: Actions,
    private teamsSummaryPlayerStatsService: TeamsSummaryPlayerStatsService,
    private teamsSummaryFacade: TeamsSummaryFacade
  ) {}

  getUserPlayerStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerStatsActions.getUserPlayersStatsBySeason),
      withLatestFrom(this.teamsSummaryFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.teamsSummaryPlayerStatsService
          .getUserPlayersStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserPlayersHistoryDto[]) =>
              PlayerStatsActions.getUserPlayersStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(PlayerStatsActions.error()))
          )
      )
    )
  );

  getUserPlayerAllTimeStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerStatsActions.getUserPlayersAllTimeStatsBySeason),
      withLatestFrom(this.teamsSummaryFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.teamsSummaryPlayerStatsService
          .getUserPlayersAllTimeStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserPlayersHistoryDto[]) =>
              PlayerStatsActions.getUserPlayersAllTimeStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(PlayerStatsActions.error()))
          )
      )
    )
  );
}
