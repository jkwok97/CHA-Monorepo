import { Injectable } from '@angular/core';
import { WaiversDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { TransactionsWaiversService } from '../services';
import { TransactionsWaiversActions } from './transactions-waivers.actions';

@Injectable()
export class TransactionsWaiverssEffects {
  constructor(
    private actions$: Actions,
    private transactionsWaiversService: TransactionsWaiversService
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
}
