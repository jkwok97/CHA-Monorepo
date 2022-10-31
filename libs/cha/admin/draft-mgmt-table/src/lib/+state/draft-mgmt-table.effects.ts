import { Injectable } from '@angular/core';
import { DraftService, LeagueDataFacade } from '@cha/domain/core';
import { DraftTableDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import {
  exhaustMap,
  map,
  catchError,
  of,
  tap,
  withLatestFrom,
  delay,
} from 'rxjs';
import { DraftMgmtTableService } from '../services';
import { DraftMgmtTableActions } from './draft-mgmt-table.actions';
import { DraftMgmtTableFacade } from './draft-mgmt-table.facade';

@Injectable()
export class DraftMgmtTableEffects {
  constructor(
    private actions$: Actions,
    private draftMgmtTableFacade: DraftMgmtTableFacade,
    private draftMgmtTableService: DraftMgmtTableService,
    private leagueDataFacade: LeagueDataFacade,
    private messageService: MessageService
  ) {}

  getDraftTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftMgmtTableActions.getDraftTable),
      delay(500),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.draftMgmtTableService.getDraftTable(data.current_draft_year).pipe(
          map((draftTableItems: DraftTableDto[]) =>
            DraftMgmtTableActions.getDraftTableSuccess({ draftTableItems })
          ),
          catchError(() => of(DraftMgmtTableActions.error()))
        )
      )
    )
  );

  editDraftTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftMgmtTableActions.editDraftPick),
      exhaustMap((action) =>
        this.draftMgmtTableService.edit(action.draftTableItem).pipe(
          map((draftTableItem: DraftTableDto) =>
            DraftMgmtTableActions.editDraftPickSuccess({
              draftTableItem,
            })
          ),
          catchError(() => of(DraftMgmtTableActions.error()))
        )
      )
    )
  );

  editPickSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DraftMgmtTableActions.editDraftPickSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Draft Pick',
            detail: 'Draft Pick has been updated',
          });
          // this.draftMgmtTableFacade.getDraftTable();
        })
      ),
    { dispatch: false }
  );
}
