import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { statTeamDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { StatsTeamLeadersService } from '../services';
import { LeagueStatsTeamActions } from './stats-team-leaders.actions';

@Injectable()
export class LeagueStatsTeamEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private statsTeamLeadersService: StatsTeamLeadersService
  ) {}

  getLeagueTeamStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueStatsTeamActions.getLeagueTeamStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.statsTeamLeadersService
          .getTeamStatsBySeasonByType(
            data.current_year,
            data.current_season_type
          )
          .pipe(
            map((leagueTeamStats: statTeamDto[]) =>
              LeagueStatsTeamActions.getLeagueTeamStatsSuccess({
                leagueTeamStats,
              })
            ),
            catchError(() => of(LeagueStatsTeamActions.error()))
          )
      )
    )
  );
}
