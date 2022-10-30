import { Injectable } from '@angular/core';
import { GetTradeDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, delay, tap } from 'rxjs';
import { TransactionsTableService } from '../services';
import { TransactionsTableActions } from './transactions-table.actions';
import { TransactionsTableFacade } from './transactions-table.facade';

@Injectable()
export class TransactionsTableEffects {
  constructor(
    private actions$: Actions,
    private transactionsTableService: TransactionsTableService,
    private transactionsTableFacade: TransactionsTableFacade,
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

  editTrade$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsTableActions.edit),
      exhaustMap((action) =>
        this.transactionsTableService.editTrade(action.trade).pipe(
          map(() => TransactionsTableActions.editSuccess()),
          catchError(() => of(TransactionsTableActions.error()))
        )
      )
    )
  );

  editTradeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TransactionsTableActions.editSuccess),
        delay(200),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Trade Picks',
            detail: 'Trade Picks are updated',
          });
          this.transactionsTableFacade.getTrades();
        })
      ),
    { dispatch: false }
  );
}
