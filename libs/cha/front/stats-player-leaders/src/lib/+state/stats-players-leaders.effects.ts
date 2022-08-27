import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatPlayerLeadersDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { StatsPlayersLeadersService } from '../services/stats-players-leaders.service';
import { LeagueStatsPlayersActions } from './stats-players-leaders.actions';

@Injectable()
export class LeagueStatsPlayersEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private playerStatsService: StatsPlayersLeadersService
  ) {}

  getPlayerLeadersStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueStatsPlayersActions.getLeaders),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.playerStatsService
          .getAllPlayerLeaders(data.current_year, data.current_season_type)
          .pipe(
            map((leaders: StatPlayerLeadersDto) =>
              LeagueStatsPlayersActions.getLeadersSuccess({
                leaders,
              })
            ),
            catchError(() => of(LeagueStatsPlayersActions.error()))
          )
      )
    )
  );
}
