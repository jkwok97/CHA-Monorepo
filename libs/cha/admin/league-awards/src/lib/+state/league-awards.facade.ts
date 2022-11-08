import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-awards.reducer';
import { LeagueAwardsActions } from './league-awards.actions';
import { Observable } from 'rxjs';
import { LeagueAwardsSelectors } from './league-awards.selectors';
import { AwardCreateDto, AwardDto } from '@cha/shared/entities';

@Injectable()
export class LeagueAwardsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueAwardsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueAwardsSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    LeagueAwardsSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    LeagueAwardsSelectors.selectSaved
  );

  awards$: Observable<AwardDto[]> = this.store.select(
    LeagueAwardsSelectors.selectAwards
  );

  users$: Observable<any[]> = this.store.select(
    LeagueAwardsSelectors.selectUsersOptions
  );

  awardTypes$: Observable<any[]> = this.store.select(
    LeagueAwardsSelectors.selectAwardTypesOptions
  );

  constructor(private store: Store<State>) {}

  getAwards() {
    this.store.dispatch(LeagueAwardsActions.getAwards());
  }

  getUsers() {
    this.store.dispatch(LeagueAwardsActions.getUsers());
  }

  getAwardTypes() {
    this.store.dispatch(LeagueAwardsActions.getAwardTypes());
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
