import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, map, catchError, of } from 'rxjs';
import { LeagueSalariesAndRatingsService } from '../services';
import { LeagueSalariesAndRatingActions } from './league-salaries-ratings.actions';

@Injectable()
export class LeagueSalariesAndRatingsEffects {
  constructor(
    private actions$: Actions,
    private leagueSalariesAndRatingsService: LeagueSalariesAndRatingsService,
    private leagueDataFacade: LeagueDataFacade
  ) {}

  getPlayerSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueSalariesAndRatingActions.getPlayerSalaries),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.leagueSalariesAndRatingsService
          .getPlayerSalaries(
            data.offseason ? data.prev_year : data.current_year
          )
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
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.leagueSalariesAndRatingsService
          .getGoaliesSalaries(
            data.offseason ? data.prev_year : data.current_year
          )
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
