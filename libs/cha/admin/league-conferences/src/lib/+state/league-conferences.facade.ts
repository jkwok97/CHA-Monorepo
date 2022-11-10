import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-conferences.reducer';
import { LeagueDivisionsActions } from './league-divisions.actions';
import { Observable } from 'rxjs';
import { LeagueDivisionsSelectors } from './league-conferences.selectors';
import { DivisionCreateDto, DivisionDto } from '@cha/shared/entities';

@Injectable()
export class LeagueDivisionsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueDivisionsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueDivisionsSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    LeagueDivisionsSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    LeagueDivisionsSelectors.selectSaved
  );

  divisions$: Observable<DivisionDto[]> = this.store.select(
    LeagueDivisionsSelectors.selectDivisions
  );

  conferenceOptions$: Observable<any[]> = this.store.select(
    LeagueDivisionsSelectors.selectConferencesOptions
  );

  constructor(private store: Store<State>) {}

  getDivisions() {
    this.store.dispatch(LeagueDivisionsActions.getDivisions());
  }

  getConferences() {
    this.store.dispatch(LeagueDivisionsActions.getConferences());
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
