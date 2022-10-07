import { Injectable } from '@angular/core';
import { SalaryAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { PlayerMgmtSalariesService } from '../services';
import { PlayerMgmtSalariesActions } from './player-mgmt-salaries.actions';
import { PlayerMgmtSalariesFacade } from './player-mgmt-salaries.facade';

@Injectable()
export class PlayerMgmtSalariesEffects {
  constructor(
    private actions$: Actions,
    private playerMgmtSalariesService: PlayerMgmtSalariesService,
    private playerMgmtSalariesFacade: PlayerMgmtSalariesFacade,
    private messageService: MessageService
  ) {}

  getSalaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtSalariesActions.getSalaries),
      exhaustMap((action) =>
        this.playerMgmtSalariesService.getSalaries().pipe(
          map((salaries: SalaryAllDto[]) =>
            PlayerMgmtSalariesActions.getSalariesSuccess({
              salaries,
            })
          ),
          catchError(() => of(PlayerMgmtSalariesActions.error()))
        )
      )
    )
  );

  editSalary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtSalariesActions.editSalary),
      exhaustMap((action) =>
        this.playerMgmtSalariesService.editSalary(action.salary).pipe(
          map((salary: SalaryAllDto) =>
            PlayerMgmtSalariesActions.editSalarysuccess({
              salary,
            })
          ),
          catchError(() => of(PlayerMgmtSalariesActions.error()))
        )
      )
    )
  );

  editPlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtSalariesActions.editSalarysuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Salary',
            detail: 'Salary has been updated',
          });
          this.playerMgmtSalariesFacade.getSalaries();
        })
      ),
    { dispatch: false }
  );
}
