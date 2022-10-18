import { Injectable } from '@angular/core';
import { WaiversDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap, delay } from 'rxjs';
import { TransactionsWaiversService } from '../services';
import { TransactionsWaiversActions } from './transactions-waivers.actions';
import { TransactionsWaiversFacade } from './transactions-waivers.facade';

@Injectable()
export class TransactionsWaiverssEffects {
  constructor(
    private actions$: Actions,
    private transactionsWaiversService: TransactionsWaiversService,
    private transactionsWaiversFacade: TransactionsWaiversFacade,
    private messageService: MessageService
  ) {}

  getWaivers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsWaiversActions.getWaivers),
      exhaustMap((action) =>
        this.transactionsWaiversService.getWaivers().pipe(
          map((waivers: WaiversDto[]) =>
            TransactionsWaiversActions.getWaiversSuccess({
              waivers,
            })
          ),
          catchError(() => of(TransactionsWaiversActions.error()))
        )
      )
    )
  );

  updateWaiver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsWaiversActions.updateWaiver),
      exhaustMap((action) =>
        this.transactionsWaiversService.updateWaiver(action.teams).pipe(
          map((teams: WaiversDto[]) =>
            TransactionsWaiversActions.updateWaiverSuccess({
              teams,
            })
          ),
          catchError(() => of(TransactionsWaiversActions.error()))
        )
      )
    )
  );

  updateWaiverSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TransactionsWaiversActions.updateWaiverSuccess),
        delay(200),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update Waiver Priority',
            detail: 'Waiver Priority has been updated',
          });
          this.transactionsWaiversFacade.getWaivers();
        })
      ),
    { dispatch: false }
  );
}
