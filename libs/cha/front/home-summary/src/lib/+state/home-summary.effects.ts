import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import {
  StatPlayersHistoryDto,
  StatUserTeamRecordDto,
} from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { HomeSummaryService } from '../services';
import { HomeSummaryActions } from './home-summary.actions';

@Injectable()
export class HomeSummaryEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private homeSummaryService: HomeSummaryService
  ) {}

  getUserTeamRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonType),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.homeSummaryService
          .getUserTeamRecordBySeasonAndSeasonType(
            action.teamId,
            data.current_year,
            data.current_season_type
          )
          .pipe(
            map((record: StatUserTeamRecordDto) =>
              HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonTypeSuccess({
                record,
              })
            ),
            catchError(() => of(HomeSummaryActions.error()))
          )
      )
    )
  );
}
