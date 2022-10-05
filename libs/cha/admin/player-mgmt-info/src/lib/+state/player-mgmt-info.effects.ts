import { Injectable } from '@angular/core';
import { PlayerDto, SalaryAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { PlayerMgmtInfoService } from '../services';
import { PlayerMgmtInfoActions } from './player-mgmt-info.actions';
import { PlayerMgmtInfoFacade } from './player-mgmt-info.facade';

@Injectable()
export class PlayerMgmtInfoEffects {
  constructor(
    private actions$: Actions,
    private playerMgmtInfoService: PlayerMgmtInfoService,
    private playerMgmtInfoFacade: PlayerMgmtInfoFacade,
    private messageService: MessageService
  ) {}

  getPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtInfoActions.getPlayers),
      exhaustMap((action) =>
        this.playerMgmtInfoService.getPlayers().pipe(
          map((players: PlayerDto[]) =>
            PlayerMgmtInfoActions.getPlayersSuccess({
              players,
            })
          ),
          catchError(() => of(PlayerMgmtInfoActions.error()))
        )
      )
    )
  );

  addPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtInfoActions.addPlayer),
      exhaustMap((action) =>
        this.playerMgmtInfoService.addPlayer(action.player).pipe(
          map((player: PlayerDto) =>
            PlayerMgmtInfoActions.addPlayerSuccess({
              player,
            })
          ),
          catchError(() => of(PlayerMgmtInfoActions.error()))
        )
      )
    )
  );

  addPlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtInfoActions.addPlayerSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Player',
            detail: 'Player has been added',
          });
        })
      ),
    { dispatch: false }
  );

  editPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtInfoActions.editPlayer),
      exhaustMap((action) =>
        this.playerMgmtInfoService.editPlayer(action.player).pipe(
          map((player: PlayerDto) =>
            PlayerMgmtInfoActions.editPlayersuccess({
              player,
            })
          ),
          catchError(() => of(PlayerMgmtInfoActions.error()))
        )
      )
    )
  );

  editPlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtInfoActions.editPlayersuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Player',
            detail: 'Player has been updated',
          });
          this.playerMgmtInfoFacade.getPlayers();
        })
      ),
    { dispatch: false }
  );

  deletePlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtInfoActions.deletePlayer),
      exhaustMap((action) =>
        this.playerMgmtInfoService.deletePlayer(action.playerId).pipe(
          map((player: PlayerDto) =>
            PlayerMgmtInfoActions.deletePlayersuccess({
              player,
            })
          ),
          catchError(() => of(PlayerMgmtInfoActions.error()))
        )
      )
    )
  );

  deletePlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtInfoActions.deletePlayersuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Delete Player',
            detail: 'Player has been removed',
          });
          this.playerMgmtInfoFacade.getPlayers();
        })
      ),
    { dispatch: false }
  );

  addSalary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtInfoActions.addSalary),
      exhaustMap((action) =>
        this.playerMgmtInfoService.addSalary(action.salary).pipe(
          map((salary: SalaryAllDto) =>
            PlayerMgmtInfoActions.addSalarySuccess({
              salary,
            })
          ),
          catchError(() => of(PlayerMgmtInfoActions.error()))
        )
      )
    )
  );

  addSalarySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtInfoActions.addSalarySuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Salary',
            detail: 'Salary has been added',
          });
          this.playerMgmtInfoFacade.getPlayers();
        })
      ),
    { dispatch: false }
  );
}
