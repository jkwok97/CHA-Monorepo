import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { NhlLeadersService } from '../services';
import { NhlLeadersActions } from './nhl-leaders.actions';

@Injectable()
export class NhlLeadersEffects {
  constructor(
    private actions$: Actions,
    private nhlService: NhlLeadersService,
    private leagueDataFacade: LeagueDataFacade
  ) {}

  getNhlLeaders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NhlLeadersActions.getLeaders),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.nhlService.getAllLeaders(data.nhl_year, data.min_games).pipe(
          map((leaders) => NhlLeadersActions.getLeadersSuccess({ leaders })),
          catchError(() => of(NhlLeadersActions.error()))
        )
      )
    )
  );
}
