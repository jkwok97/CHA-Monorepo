import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeagueDataFacade, DraftService } from '@cha/domain/core';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { DraftCurrentActions } from './draft-current.actions';
import { DraftTableDto } from '@cha/shared/entities';

@Injectable()
export class DraftCurrentEffects {
  constructor(
    private actions$: Actions,
    private draftService: DraftService,
    private leagueDataFacade: LeagueDataFacade
  ) {}

  getDraftTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftCurrentActions.getDraftTable),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.draftService
          .getDraftTable(action.season, data.prev_year) // TODO SWITCH
          .pipe(
            map((draftTable: DraftTableDto[]) =>
              DraftCurrentActions.getDraftTableSuccess({ draftTable })
            ),
            catchError(() => of(DraftCurrentActions.error()))
          )
      )
    )
  );
}
