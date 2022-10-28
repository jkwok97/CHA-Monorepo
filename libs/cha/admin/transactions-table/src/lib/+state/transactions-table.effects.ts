import { Injectable } from '@angular/core';
import { GetTradeDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { TransactionsTableService } from '../services';
import { TransactionsTableActions } from './transactions-table.actions';

@Injectable()
export class TransactionsTableEffects {
  constructor(
    private actions$: Actions,
    private transactionsTableService: TransactionsTableService,
    private messageService: MessageService
  ) {}

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsTableActions.get),
      exhaustMap((action) =>
        this.transactionsTableService.getTrades().pipe(
          map((trades: GetTradeDto[]) =>
            TransactionsTableActions.getSuccess({
              trades,
            })
          ),
          catchError(() => of(TransactionsTableActions.error()))
        )
      )
    )
  );
}
