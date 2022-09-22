import { Injectable } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { StatUserGoaliesHistoryDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { HomeGoaliesService } from '../services';
import { HomeGoaliesActions } from './home-goalies.actions';

@Injectable()
export class HomeGoaliesEffects {
  constructor(
    private actions$: Actions,
    private homeGoaliesService: HomeGoaliesService,
    private authFacade: AuthFacade
  ) {}

  getUserGoalieStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeGoaliesActions.getUserGoaliesStatsBySeason),
      withLatestFrom(this.authFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.homeGoaliesService
          .getUserGoaliesStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserGoaliesHistoryDto[]) =>
              HomeGoaliesActions.getUserGoaliesStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(HomeGoaliesActions.error()))
          )
      )
    )
  );

  getUserGoalieAllTimeStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeGoaliesActions.getUserGoaliesAllTimeStatsBySeason),
      withLatestFrom(this.authFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.homeGoaliesService
          .getUserGoaliesAllTimeStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserGoaliesHistoryDto[]) =>
              HomeGoaliesActions.getUserGoaliesAllTimeStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(HomeGoaliesActions.error()))
          )
      )
    )
  );
}
