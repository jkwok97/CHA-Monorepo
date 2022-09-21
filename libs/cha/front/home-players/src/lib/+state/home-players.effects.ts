import { Injectable } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { UserTeamFacade } from '@cha/domain/core';
import {
  StatTeamsHistoryDto,
  StatUserPlayersHistoryDto,
  StatUserTeamHistoryDto,
} from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { HomePlayersService } from '../services';
import { HomePlayersActions } from './home-players.actions';

@Injectable()
export class HomeFranchiseEffects {
  constructor(
    private actions$: Actions,
    private homePlayersService: HomePlayersService,
    private authFacade: AuthFacade
  ) {}

  getUserPlayerStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePlayersActions.getUserPlayersStatsBySeason),
      withLatestFrom(this.authFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.homePlayersService
          .getUserPlayersStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserPlayersHistoryDto[]) =>
              HomePlayersActions.getUserPlayersStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(HomePlayersActions.error()))
          )
      )
    )
  );

  getUserPlayerAllTimeStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePlayersActions.getUserPlayersAllTimeStatsBySeason),
      withLatestFrom(this.authFacade.userId$),
      exhaustMap(([action, userId]) =>
        this.homePlayersService
          .getUserPlayersAllTimeStatsBySeasonType(userId, action.seasonType)
          .pipe(
            map((stats: StatUserPlayersHistoryDto[]) =>
              HomePlayersActions.getUserPlayersAllTimeStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(HomePlayersActions.error()))
          )
      )
    )
  );
}
