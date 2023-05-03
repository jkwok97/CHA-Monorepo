import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatTeamPlayoffsDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { GamesPlayoffsService } from '../services';
import { GamesPlayoffsActions } from './games-playoffs.actions';

@Injectable()
export class GamesPlayoffsEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private gamesPlayoffsService: GamesPlayoffsService
  ) {}

  getPlayoffStandings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesPlayoffsActions.getStandings),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.gamesPlayoffsService
          .getPlayoffStandings(
            data.offseason ? data.prev_year : data.current_year,
            'Regular'
          )
          .pipe(
            map((playoffStandings: StatTeamPlayoffsDto[]) =>
              GamesPlayoffsActions.getStandingsSuccess({
                playoffStandings,
              })
            ),
            catchError(() => of(GamesPlayoffsActions.error()))
          )
      )
    )
  );

  getBoxScore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesPlayoffsActions.getBoxScore),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.gamesPlayoffsService
          .getBoxScore(action.gameId, data.current_year)
          .pipe(
            map((game: File) =>
              GamesPlayoffsActions.getBoxScoreSuccess({ game })
            ),
            catchError(() => of(GamesPlayoffsActions.getBoxScoreError()))
          )
      )
    )
  );
}
