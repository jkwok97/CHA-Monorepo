import { Injectable } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { UserTeamFacade } from '@cha/domain/core';
import {
  StatTeamsHistoryDto,
  StatUserTeamHistoryDto,
} from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { HomeFranchiseService } from '../services';
import { HomeFranchiseActions } from './home-franchise.actions';

@Injectable()
export class HomeFranchiseEffects {
  constructor(
    private actions$: Actions,
    private homeFranchiseService: HomeFranchiseService,
    private authFacade: AuthFacade
  ) {}

  getAllTimeTeamsStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeFranchiseActions.getUserTeamStatsBySeason),
      withLatestFrom(this.authFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.homeFranchiseService
          .getUserTeamStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserTeamHistoryDto[]) =>
              HomeFranchiseActions.getUserTeamStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(HomeFranchiseActions.error()))
          )
      )
    )
  );
}
