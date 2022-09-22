import { Injectable } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { UserAwardDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { HomeAwardsService } from '../services';
import { HomeAwardsActions } from './home-awards.actions';

@Injectable()
export class HomeAwardsEffects {
  constructor(
    private actions$: Actions,
    private homeAwardsService: HomeAwardsService,
    private authFacade: AuthFacade
  ) {}

  getUserAwards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeAwardsActions.getUserAwards),
      withLatestFrom(this.authFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.homeAwardsService.getUserAwards(userId).pipe(
          map((awards: UserAwardDto[]) =>
            HomeAwardsActions.getUserAwardsSuccess({
              awards,
            })
          ),
          catchError(() => of(HomeAwardsActions.error()))
        )
      )
    )
  );
}
