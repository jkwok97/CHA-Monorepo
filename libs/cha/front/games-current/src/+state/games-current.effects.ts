import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { GamesDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, map, catchError, of } from 'rxjs';
import { GamesCurrentService } from '../services';
import { GamesCurrentActions } from './games-current.actions';

@Injectable()
export class GamesCurrentEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private gamesCurrentService: GamesCurrentService
  ) {}

  getCurrentGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesCurrentActions.getCurrent),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.gamesCurrentService
          .getGames(data.current_year, data.current_day)
          .pipe(
            map((games: GamesDto[]) =>
              GamesCurrentActions.getCurrentSuccess({
                games,
              })
            ),
            catchError(() => of(GamesCurrentActions.error()))
          )
      )
    )
  );

  getNextGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesCurrentActions.getNext),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.gamesCurrentService
          .getGames(data.current_year, Number(data.current_day) + 5)
          .pipe(
            map((games: GamesDto[]) =>
              GamesCurrentActions.getNextSuccess({
                games,
              })
            ),
            catchError(() => of(GamesCurrentActions.error()))
          )
      )
    )
  );

  getPreviousGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesCurrentActions.getPrevious),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.gamesCurrentService
          .getGames(data.current_year, Number(data.current_day) - 5)
          .pipe(
            map((games: GamesDto[]) =>
              GamesCurrentActions.getPreviousSuccess({
                games,
              })
            ),
            catchError(() => of(GamesCurrentActions.error()))
          )
      )
    )
  );
}
