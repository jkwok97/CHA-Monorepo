import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-conferences.reducer';
import { LeagueConferencesActions } from './league-conferences.actions';
import { Observable } from 'rxjs';
import { LeagueDivisionsSelectors } from './league-conferences.selectors';
import {
  ConferenceCreateDto,
  ConferenceDto,
  DivisionDto,
} from '@cha/shared/entities';

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

  getConferences() {
    this.store.dispatch(LeagueConferencesActions.getConferences());
  }

  addConference(conference: ConferenceCreateDto) {
    this.store.dispatch(LeagueConferencesActions.addConference({ conference }));
  }

  editConference(conference: ConferenceDto) {
    this.store.dispatch(
      LeagueConferencesActions.editConference({ conference })
    );
  }

  deleteConference(conferenceId: number) {
    this.store.dispatch(
      LeagueConferencesActions.deleteConference({ conferenceId })
    );
  }
}
