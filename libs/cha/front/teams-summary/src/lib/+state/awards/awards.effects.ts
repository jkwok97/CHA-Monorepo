import { Injectable } from '@angular/core';
import { UserAwardDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { TeamsSummaryAwardsService } from '../../services';
import { TeamsSummaryFacade } from '../summary/teams-summary.facade';
import { AwardsActions } from './awards.actions';

@Injectable()
export class AwardsEffects {
  constructor(
    private actions$: Actions,
    private teamsSummaryAwardsService: TeamsSummaryAwardsService,
    private teamsSummaryFacade: TeamsSummaryFacade
  ) {}

  getUserAwards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardsActions.getUserAwards),
      withLatestFrom(this.teamsSummaryFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.teamsSummaryAwardsService.getUserAwards(userId).pipe(
          map((awards: UserAwardDto[]) =>
            AwardsActions.getUserAwardsSuccess({
              awards,
            })
          ),
          catchError(() => of(AwardsActions.error()))
        )
      )
    )
  );
}
