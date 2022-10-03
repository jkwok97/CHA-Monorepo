import { Injectable } from '@angular/core';
import { DivisionDto, TeamDto, UserDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { LeagueTeamsService } from '../services';
import { LeagueTeamsActions } from './league-teams.actions';
import { LeagueTeamsFacade } from './league-teams.facade';

@Injectable()
export class LeagueTeamsEffects {
  constructor(
    private actions$: Actions,
    private leagueTeamsService: LeagueTeamsService,
    private leagueTeamsFacade: LeagueTeamsFacade,
    private messageService: MessageService
  ) {}

  getTeams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueTeamsActions.getTeams),
      exhaustMap((action) =>
        this.leagueTeamsService.getTeams().pipe(
          map((teams: TeamDto[]) =>
            LeagueTeamsActions.getTeamsSuccess({
              teams,
            })
          ),
          catchError(() => of(LeagueTeamsActions.error()))
        )
      )
    )
  );

  addTeam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueTeamsActions.addTeam),
      exhaustMap((action) =>
        this.leagueTeamsService.addTeam(action.team).pipe(
          map((team: TeamDto) =>
            LeagueTeamsActions.addTeamSuccess({
              team,
            })
          ),
          catchError(() => of(LeagueTeamsActions.error()))
        )
      )
    )
  );

  addTeamSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueTeamsActions.addTeamSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Team',
            detail: 'Team has been added',
          });
          this.leagueTeamsFacade.getTeams();
        })
      ),
    { dispatch: false }
  );

  editTeam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueTeamsActions.editTeam),
      exhaustMap((action) =>
        this.leagueTeamsService.editTeam(action.team).pipe(
          map((team: TeamDto) =>
            LeagueTeamsActions.editTeamSuccess({
              team,
            })
          ),
          catchError(() => of(LeagueTeamsActions.error()))
        )
      )
    )
  );

  editTeamSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueTeamsActions.editTeamSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edit Team',
            detail: 'Team has been updated',
          });
          this.leagueTeamsFacade.getTeams();
        })
      ),
    { dispatch: false }
  );

  deleteTeam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueTeamsActions.deleteTeam),
      exhaustMap((action) =>
        this.leagueTeamsService.deleteTeam(action.teamId).pipe(
          map((team: TeamDto) =>
            LeagueTeamsActions.deleteTeamSuccess({
              team,
            })
          ),
          catchError(() => of(LeagueTeamsActions.error()))
        )
      )
    )
  );

  deleteTeamSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeagueTeamsActions.deleteTeamSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Delete Team',
            detail: 'Team has been removed',
          });
          this.leagueTeamsFacade.getTeams();
        })
      ),
    { dispatch: false }
  );

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueTeamsActions.getUsers),
      exhaustMap((action) =>
        this.leagueTeamsService.getUsers().pipe(
          map((users: UserDto[]) =>
            LeagueTeamsActions.getUsersSuccess({
              users,
            })
          ),
          catchError(() => of(LeagueTeamsActions.error()))
        )
      )
    )
  );

  getDivisions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueTeamsActions.getDivisions),
      exhaustMap((action) =>
        this.leagueTeamsService.getDivisions().pipe(
          map((divisions: DivisionDto[]) =>
            LeagueTeamsActions.getDivisionsSuccess({
              divisions,
            })
          ),
          catchError(() => of(LeagueTeamsActions.error()))
        )
      )
    )
  );
}
