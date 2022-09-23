import { Injectable } from '@angular/core';
import { StatUserTeamHistoryDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { TeamsSummaryTeamStatsService } from '../../services';
import { TeamsSummaryFacade } from '../summary/teams-summary.facade';
import { TeamStatsActions } from './team-stats.actions';

@Injectable()
export class TeamStatsEffects {
  constructor(
    private actions$: Actions,
    private teamsSummaryTeamStatsService: TeamsSummaryTeamStatsService,
    private teamsSummaryFacade: TeamsSummaryFacade
  ) {}

  getAllTimeTeamsStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamStatsActions.getUserTeamStatsBySeason),
      withLatestFrom(this.teamsSummaryFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.teamsSummaryTeamStatsService
          .getUserTeamStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserTeamHistoryDto[]) =>
              TeamStatsActions.getUserTeamStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(TeamStatsActions.error()))
          )
      )
    )
  );
}
