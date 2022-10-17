import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatGoalieAllDto, StatPlayerAllDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import {
  exhaustMap,
  map,
  catchError,
  of,
  tap,
  withLatestFrom,
  delay,
} from 'rxjs';
import { PlayerMgmtGoalieCurrentService } from '../services';
import { PlayerMgmtGoalieCurrentActions } from './player-mgmt-goalie-current.actions';
import { PlayerMgmtGoalieCurrentFacade } from './player-mgmt-goalie-current.facade';

@Injectable()
export class PlayerMgmtGoalieCurrentEffects {
  constructor(
    private actions$: Actions,
    private playerMgmtGoalieCurrentService: PlayerMgmtGoalieCurrentService,
    private playerMgmtGoalieCurrentFacade: PlayerMgmtGoalieCurrentFacade,
    private leagueDataFacade: LeagueDataFacade,
    private messageService: MessageService
  ) {}

  getPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtGoalieCurrentActions.getGoalies),
      delay(500),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.playerMgmtGoalieCurrentService.getGoalies(data.current_year).pipe(
          map((goalies: StatGoalieAllDto[]) =>
            PlayerMgmtGoalieCurrentActions.getGoaliesSuccess({
              goalies,
            })
          ),
          catchError(() => of(PlayerMgmtGoalieCurrentActions.error()))
        )
      )
    )
  );

  editPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtGoalieCurrentActions.editGoalie),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.playerMgmtGoalieCurrentService
          .editGoalie(action.goalie, data.current_year)
          .pipe(
            map((goalie: StatGoalieAllDto) =>
              PlayerMgmtGoalieCurrentActions.editGoaliesuccess({
                goalie,
              })
            ),
            catchError(() => of(PlayerMgmtGoalieCurrentActions.error()))
          )
      )
    )
  );

  editPlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtGoalieCurrentActions.editGoaliesuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Player',
            detail: 'Player has been updated',
          });
          this.playerMgmtGoalieCurrentFacade.getGoalies();
        })
      ),
    { dispatch: false }
  );

  deletePlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerMgmtGoalieCurrentActions.deleteGoalie),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.playerMgmtGoalieCurrentService
          .deleteGoalie(action.goalieId, data.current_year)
          .pipe(
            map((goalie: StatGoalieAllDto) =>
              PlayerMgmtGoalieCurrentActions.deleteGoaliesuccess({
                goalie,
              })
            ),
            catchError(() => of(PlayerMgmtGoalieCurrentActions.error()))
          )
      )
    )
  );

  deletePlayerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlayerMgmtGoalieCurrentActions.deleteGoaliesuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Delete Player',
            detail: 'Player has been removed',
          });
          this.playerMgmtGoalieCurrentFacade.getGoalies();
        })
      ),
    { dispatch: false }
  );
}
