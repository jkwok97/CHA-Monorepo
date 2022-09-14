import { Injectable } from '@angular/core';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { HistoryTeamsService } from '../services';
import { HistoryTeamsActions } from './history-teams.actions';

@Injectable()
export class HistoryTeamsEffects {
  constructor(
    private actions$: Actions,
    private historyTeamsService: HistoryTeamsService
  ) {}

  getAllTimeTeamsStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HistoryTeamsActions.getTeamsStatsBySeason),

      exhaustMap((action) =>
        this.historyTeamsService
          .getAllTimeTeamsStatsBySeasonType(action.seasonType)
          .pipe(
            map((stats: StatTeamsHistoryDto[]) =>
              HistoryTeamsActions.getTeamsStatsBySeasonSuccess({
                stats,
              })
            ),
            catchError(() => of(HistoryTeamsActions.error()))
          )
      )
    )
  );
}
