import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-awards.reducer';
import { LeagueAwardsActions } from './league-awards.actions';
import { Observable } from 'rxjs';
import { LeagueTeamsSelectors } from './league-awards.selectors';
import { AwardCreateDto, AwardDto } from '@cha/shared/entities';

@Injectable()
export class LeagueAwardsFacade {
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

  awards$: Observable<AwardDto[]> = this.store.select(
    LeagueTeamsSelectors.selectAwards
  );

  users$: Observable<any[]> = this.store.select(
    LeagueTeamsSelectors.selectUsersOptions
  );

  constructor(private store: Store<State>) {}

  getAwards() {
    this.store.dispatch(LeagueAwardsActions.getAwards());
  }

  getUsers() {
    this.store.dispatch(LeagueAwardsActions.getUsers());
  }

  addAward(award: AwardCreateDto) {
    this.store.dispatch(LeagueAwardsActions.addAward({ award }));
  }

  editAward(award: AwardDto) {
    this.store.dispatch(LeagueAwardsActions.editAward({ award }));
  }

  deleteAward(awardId: number) {
    this.store.dispatch(LeagueAwardsActions.deleteAward({ awardId }));
  }
}
