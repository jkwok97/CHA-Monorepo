import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-divisions.reducer';
import { LeagueDivisionsActions } from './league-divisions.actions';
import { Observable } from 'rxjs';
import { LeagueUsersSelectors } from './league-divisions.selectors';
import { DivisionCreateDto, DivisionDto, UserDto } from '@cha/shared/entities';

@Injectable()
export class LeagueDivisionsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    LeagueUsersSelectors.selectSaved
  );

  users$: Observable<UserDto[]> = this.store.select(
    LeagueUsersSelectors.selectUsers
  );

  constructor(private store: Store<State>) {}

  getDivisions() {
    this.store.dispatch(LeagueDivisionsActions.getDivisions());
  }

  addDivision(division: DivisionCreateDto) {
    this.store.dispatch(LeagueDivisionsActions.addDivision({ division }));
  }

  editDivision(division: DivisionDto) {
    this.store.dispatch(LeagueDivisionsActions.editDivision({ division }));
  }

  deleteDivision(divisionId: number) {
    this.store.dispatch(LeagueDivisionsActions.deleteDivision({ divisionId }));
  }
}
