import { Injectable } from '@angular/core';
import { GoalieRatingDto, PlayerRatingDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { PlayerMgmtRatingsService } from '../services';
import { PlayerMgmtRatingsActions } from './player-mgmt-ratings.actions';
import { PlayerMgmtRatingsFacade } from './player-mgmt-ratings.facade';

@Injectable()
export class PlayerMgmtInfoEffects {
  constructor(
    private actions$: Actions,
    private playerMgmtRatingsService: PlayerMgmtRatingsService,
    private playerMgmtRatingsFacade: PlayerMgmtRatingsFacade,
    private messageService: MessageService
  ) {}

  getPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtRatingsActions.getPlayers),
      exhaustMap((action) =>
        this.playerMgmtRatingsService.getPlayers().pipe(
          map((players: PlayerRatingDto[]) =>
            PlayerMgmtRatingsActions.getPlayersSuccess({
              players,
            })
          ),
          catchError(() => of(PlayerMgmtRatingsActions.error()))
        )
      )
    )
  );

  editPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtRatingsActions.editPlayer),
      exhaustMap((action) =>
        this.playerMgmtRatingsService.editPlayer(action.player).pipe(
          map((player: PlayerRatingDto) =>
            PlayerMgmtRatingsActions.editPlayersuccess({
              player,
            })
          ),
          catchError(() => of(PlayerMgmtRatingsActions.error()))
        )
      )
    )
  );

  editPlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtRatingsActions.editPlayersuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Player Rating',
            detail: 'Player Rating has been updated',
          });
          this.playerMgmtRatingsFacade.getPlayers();
        })
      ),
    { dispatch: false }
  );

  getGoalies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtRatingsActions.getGoalies),
      exhaustMap((action) =>
        this.playerMgmtRatingsService.getGoalies().pipe(
          map((goalies: GoalieRatingDto[]) =>
            PlayerMgmtRatingsActions.getGoaliesSuccess({
              goalies,
            })
          ),
          catchError(() => of(PlayerMgmtRatingsActions.error()))
        )
      )
    )
  );

  editGoalie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtRatingsActions.editGoalie),
      exhaustMap((action) =>
        this.playerMgmtRatingsService.editGoalie(action.goalie).pipe(
          map((goalie: GoalieRatingDto) =>
            PlayerMgmtRatingsActions.editGoaliesuccess({
              goalie,
            })
          ),
          catchError(() => of(PlayerMgmtRatingsActions.error()))
        )
      )
    )
  );

  editGoalieSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtRatingsActions.editGoaliesuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Goalie Rating',
            detail: 'Goalie Rating has been updated',
          });
          this.playerMgmtRatingsFacade.getGoalies();
        })
      ),
    { dispatch: false }
  );
}
