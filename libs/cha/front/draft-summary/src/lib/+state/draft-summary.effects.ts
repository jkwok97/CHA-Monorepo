import { Injectable } from '@angular/core';
import { DraftService } from '@cha/domain/core';
import { DraftPickDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { DraftSummaryActions } from './draft-summary.actions';

@Injectable()
export class DraftSummaryEffects {
  constructor(private actions$: Actions, private draftService: DraftService) {}

  getDraftSummary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftSummaryActions.getDraftPicks),
      exhaustMap((action) =>
        this.draftService.getDraftPicks().pipe(
          map((draftPicks: DraftPickDto[]) =>
            DraftSummaryActions.getDraftPicksSuccess({ draftPicks })
          ),
          catchError(() => of(DraftSummaryActions.error()))
        )
      )
    )
  );
}
