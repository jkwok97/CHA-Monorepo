import { Injectable } from '@angular/core';
import { StatPlayerAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { PlayerMgmtPlayerCurrentService } from '../services';
import { PlayerMgmtPlayerCurrentActions } from './player-mgmt-player-current.actions';
import { PlayerMgmtPlayerCurrentFacade } from './player-mgmt-player-current.facade';

@Injectable()
export class PlayerMgmtPlayerCurrentEffects {
  constructor(
    private actions$: Actions,
    private playerMgmtPlayerCurrentService: PlayerMgmtPlayerCurrentService,
    private playerMgmtPlayerCurrentFacade: PlayerMgmtPlayerCurrentFacade,
    private messageService: MessageService
  ) {}

  getPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtPlayerCurrentActions.getPlayers),
      exhaustMap((action) =>
        this.playerMgmtPlayerCurrentService.getPlayers().pipe(
          map((players: StatPlayerAllDto[]) =>
            PlayerMgmtPlayerCurrentActions.getPlayersSuccess({
              players,
            })
          ),
          catchError(() => of(PlayerMgmtPlayerCurrentActions.error()))
        )
      )
    )
  );

  addPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtPlayerCurrentActions.addPlayer),
      exhaustMap((action) =>
        this.playerMgmtPlayerCurrentService.addPlayer(action.player).pipe(
          map((player: StatPlayerAllDto) =>
            PlayerMgmtPlayerCurrentActions.addPlayerSuccess({
              player,
            })
          ),
          catchError(() => of(PlayerMgmtPlayerCurrentActions.error()))
        )
      )
    )
  );

  addPlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtPlayerCurrentActions.addPlayerSuccess),
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
      ofType(PlayerMgmtPlayerCurrentActions.editPlayer),
      exhaustMap((action) =>
        this.playerMgmtPlayerCurrentService.editPlayer(action.player).pipe(
          map((player: StatPlayerAllDto) =>
            PlayerMgmtPlayerCurrentActions.editPlayersuccess({
              player,
            })
          ),
          catchError(() => of(PlayerMgmtPlayerCurrentActions.error()))
        )
      )
    )
  );

  editPlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtPlayerCurrentActions.editPlayersuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Player',
            detail: 'Player has been updated',
          });
          this.playerMgmtPlayerCurrentFacade.getPlayers();
        })
      ),
    { dispatch: false }
  );

  deletePlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtPlayerCurrentActions.deletePlayer),
      exhaustMap((action) =>
        this.playerMgmtPlayerCurrentService.deletePlayer(action.playerId).pipe(
          map((player: StatPlayerAllDto) =>
            PlayerMgmtPlayerCurrentActions.deletePlayersuccess({
              player,
            })
          ),
          catchError(() => of(PlayerMgmtPlayerCurrentActions.error()))
        )
      )
    )
  );

  deletePlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtPlayerCurrentActions.deletePlayersuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Delete Player',
            detail: 'Player has been removed',
          });
          this.playerMgmtPlayerCurrentFacade.getPlayers();
        })
      ),
    { dispatch: false }
  );
}
