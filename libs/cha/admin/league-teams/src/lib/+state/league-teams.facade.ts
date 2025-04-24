import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-teams.reducer';
import { LeagueTeamsActions } from './league-teams.actions';
import { Observable } from 'rxjs';
import { LeagueTeamsSelectors } from './league-teams.selectors';
import { TeamCreateDto, TeamDto } from '@cha/shared/entities';

@Injectable()
export class LeagueTeamsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueTeamsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueTeamsSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    LeagueTeamsSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    LeagueTeamsSelectors.selectSaved
  );

  teams$: Observable<TeamDto[]> = this.store.select(
    LeagueTeamsSelectors.selectTeams
  );

  users$: Observable<any[]> = this.store.select(
    LeagueTeamsSelectors.selectUsersOptions
  );

  divisions$: Observable<any[]> = this.store.select(
    LeagueTeamsSelectors.selectDivisionsOptions
  );

  constructor(private store: Store<State>) {}

  getTeams() {
    this.store.dispatch(LeagueTeamsActions.getTeams());
  }

  getUsers() {
    this.store.dispatch(LeagueTeamsActions.getUsers());
  }

  getDivisions() {
    this.store.dispatch(LeagueTeamsActions.getDivisions());
  }

  addTeam(team: TeamCreateDto) {
    this.store.dispatch(LeagueTeamsActions.addTeam({ team }));
  }

  editTeam(team: TeamDto) {
    this.store.dispatch(LeagueTeamsActions.editTeam({ team }));
  }

  deleteTeam(teamId: number) {
    this.store.dispatch(LeagueTeamsActions.deleteTeam({ teamId }));
  }
}
