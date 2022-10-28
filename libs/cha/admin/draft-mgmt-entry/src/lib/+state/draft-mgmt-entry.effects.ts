import { Injectable } from '@angular/core';
import { DraftPickDto, PlayerDto, TeamDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { DraftMgmtEntryService } from '../services';
import { DraftMgmtEntryActions } from './draft-mgmt-entry.actions';
import { DraftMgmtEntryFacade } from './draft-mgmt-entry.facade';

@Injectable()
export class DraftMgmtEntryEffects {
  constructor(
    private actions$: Actions,
    private draftMgmtEntryService: DraftMgmtEntryService,
    private draftMgmtEntryFacade: DraftMgmtEntryFacade,
    private messageService: MessageService
  ) {}

  getPicks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftMgmtEntryActions.getDraftPicks),
      exhaustMap((action) =>
        this.draftMgmtEntryService.getPicks().pipe(
          map((picks: DraftPickDto[]) =>
            DraftMgmtEntryActions.getDraftPicksSuccess({
              picks,
            })
          ),
          catchError(() => of(DraftMgmtEntryActions.error()))
        )
      )
    )
  );

  getPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftMgmtEntryActions.getPlayers),
      exhaustMap((action) =>
        this.draftMgmtEntryService.getPlayers().pipe(
          map((players: PlayerDto[]) =>
            DraftMgmtEntryActions.getPlayersSuccess({
              players,
            })
          ),
          catchError(() => of(DraftMgmtEntryActions.error()))
        )
      )
    )
  );

  getTeams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftMgmtEntryActions.getTeams),
      exhaustMap((action) =>
        this.draftMgmtEntryService.getTeams().pipe(
          map((teams: TeamDto[]) =>
            DraftMgmtEntryActions.getTeamsSuccess({
              teams,
            })
          ),
          catchError(() => of(DraftMgmtEntryActions.error()))
        )
      )
    )
  );

  addPick$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftMgmtEntryActions.addDraftPick),
      exhaustMap((action) =>
        this.draftMgmtEntryService.addPick(action.pick).pipe(
          map((pick: DraftPickDto) =>
            DraftMgmtEntryActions.addDraftPickSuccess({
              pick,
            })
          ),
          catchError(() => of(DraftMgmtEntryActions.error()))
        )
      )
    )
  );

  addPickSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DraftMgmtEntryActions.addDraftPickSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Draft Pick',
            detail: 'Draft Pick has been added',
          });
          this.draftMgmtEntryFacade.getPicks();
        })
      ),
    { dispatch: false }
  );

  editPick$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftMgmtEntryActions.editDraftPick),
      exhaustMap((action) =>
        this.draftMgmtEntryService.editPick(action.pick).pipe(
          map((pick: DraftPickDto) =>
            DraftMgmtEntryActions.editDraftPickSuccess({
              pick,
            })
          ),
          catchError(() => of(DraftMgmtEntryActions.error()))
        )
      )
    )
  );

  editPickSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DraftMgmtEntryActions.editDraftPickSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Draft Pick',
            detail: 'Draft Pick has been updated',
          });
          this.draftMgmtEntryFacade.getPicks();
        })
      ),
    { dispatch: false }
  );

  deletePick$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftMgmtEntryActions.deleteDraftPick),
      exhaustMap((action) =>
        this.draftMgmtEntryService.deletePick(action.pickId).pipe(
          map(() => DraftMgmtEntryActions.deleteDraftPickSuccess()),
          catchError(() => of(DraftMgmtEntryActions.error()))
        )
      )
    )
  );

  deletePlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DraftMgmtEntryActions.deleteDraftPickSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Delete Draft Pick',
            detail: 'Draft Pick has been removed',
          });
          this.draftMgmtEntryFacade.getPicks();
        })
      ),
    { dispatch: false }
  );
}
