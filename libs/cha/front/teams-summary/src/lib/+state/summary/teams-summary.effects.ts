import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { TeamsSummaryService } from '../../services';
import { TeamsSummaryActions } from './teams-summary.actions';

@Injectable()
export class TeamsSummaryEffects {
  constructor(
    private actions$: Actions,
    private teamsSummaryFranchiseService: TeamsSummaryService,
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
}
