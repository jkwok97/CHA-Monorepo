import { Injectable } from '@angular/core';
import { ConferenceDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { LeagueConferencesService } from '../services';
import { LeagueConferencesActions } from './league-conferences.actions';
import { LeagueConferencesFacade } from './league-conferences.facade';

@Injectable()
export class LeagueConferencesEffects {
  constructor(
    private actions$: Actions,
    private leagueConferencesService: LeagueConferencesService,
    private leagueConferenceFacade: LeagueConferencesFacade,
    private messageService: MessageService
  ) {}

  getConferences$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueConferencesActions.getConferences),
      exhaustMap((action) =>
        this.leagueConferencesService.getConferences().pipe(
          map((conferences: ConferenceDto[]) =>
            LeagueConferencesActions.getConferencesSuccess({
              conferences,
            })
          ),
          catchError(() => of(LeagueConferencesActions.error()))
        )
      )
    )
  );

  addConference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueConferencesActions.addConference),
      exhaustMap((action) =>
        this.leagueConferencesService.addConferences(action.conference).pipe(
          map((conference: ConferenceDto) =>
            LeagueConferencesActions.addConferenceSuccess({
              conference,
            })
          ),
          catchError(() => of(LeagueConferencesActions.error()))
        )
      )
    )
  );

  addConferenceSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueConferencesActions.addConferenceSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Conference',
            detail: 'Conference has been added',
          });
          this.leagueConferenceFacade.getConferences();
        })
      ),
    { dispatch: false }
  );

  editConference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueConferencesActions.editConference),
      exhaustMap((action) =>
        this.leagueConferencesService.editConferences(action.conference).pipe(
          map((conference: ConferenceDto) =>
            LeagueConferencesActions.editConferenceSuccess({
              conference,
            })
          ),
          catchError(() => of(LeagueConferencesActions.error()))
        )
      )
    )
  );

  editConferenceSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueConferencesActions.editConferenceSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Conference',
            detail: 'Conference has been updated',
          });
          this.leagueConferenceFacade.getConferences();
        })
      ),
    { dispatch: false }
  );

  deleteConference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueConferencesActions.deleteConference),
      exhaustMap((action) =>
        this.leagueConferencesService
          .deleteConferences(action.conferenceId)
          .pipe(
            map((conference: ConferenceDto) =>
              LeagueConferencesActions.deleteConferenceSuccess({
                conference,
              })
            ),
            catchError(() => of(LeagueConferencesActions.error()))
          )
      )
    )
  );

  deleteConferenceSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueConferencesActions.deleteConferenceSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Delete Conference',
            detail: 'Conference has been removed',
          });
          this.leagueConferenceFacade.getConferences();
        })
      ),
    { dispatch: false }
  );
}
