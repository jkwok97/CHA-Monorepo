import { Injectable } from '@angular/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { LeagueSalariesAndRatingsService } from '../services';
import { LeagueSalariesAndRatingActions } from './league-salaries-ratings.actions';

@Injectable()
export class LeagueSalariesAndRatingsEffects {
  constructor(
    private actions$: Actions,
    private leagueSalariesAndRatingsService: LeagueSalariesAndRatingsService
  ) {}

  getPlayerSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueSalariesAndRatingActions.getPlayerSalaries),
      exhaustMap((action) =>
        this.leagueSalariesAndRatingsService
          .getPlayerSalaries(action.season)
          .pipe(
            map((salaries: SalariesAndRatingsDto[]) =>
              LeagueSalariesAndRatingActions.getPlayerSalariesSuccess({
                salaries,
              })
            ),
            catchError(() => of(LeagueSalariesAndRatingActions.error()))
          )
      )
    )
  );

  getGoalieSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueSalariesAndRatingActions.getGoaliesalaries),
      exhaustMap((action) =>
        this.leagueSalariesAndRatingsService
          .getGoaliesSalaries(action.season)
          .pipe(
            map((salaries: SalariesAndRatingsDto[]) =>
              LeagueSalariesAndRatingActions.getGoaliesalariesSuccess({
                salaries,
              })
            ),
            catchError(() => of(LeagueSalariesAndRatingActions.error()))
          )
      )
    )
  );
}
