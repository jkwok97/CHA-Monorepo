import { Injectable } from '@angular/core';
import { StatUserTeamHistoryDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { TeamsSummaryFranchiseService } from '../services';
import { TeamsSummaryActions } from './teams-summary.actions';
import { TeamsSummaryFacade } from './teams-summary.facade';

@Injectable()
export class TeamsSummaryEffects {
  constructor(
    private actions$: Actions,
    private teamsSummaryFranchiseService: TeamsSummaryFranchiseService,
    private teamsSummaryFacade: TeamsSummaryFacade
  ) {}

  getUserIdByTeamId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamsSummaryActions.getUserIdByTeamId),
      exhaustMap((action) =>
        this.teamsSummaryFranchiseService.getUserIdByTeamId(action.teamId).pipe(
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

  getAllTimeTeamsStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamsSummaryActions.getUserTeamStatsBySeason),
      withLatestFrom(this.teamsSummaryFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.teamsSummaryFranchiseService
          .getUserTeamStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserTeamHistoryDto[]) =>
              TeamsSummaryActions.getUserTeamStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(TeamsSummaryActions.error()))
          )
      )
    )
  );
}
