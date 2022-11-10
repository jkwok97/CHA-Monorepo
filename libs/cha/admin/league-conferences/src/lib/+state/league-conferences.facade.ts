import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-conferences.reducer';
import { LeagueConferencesActions } from './league-conferences.actions';
import { Observable } from 'rxjs';
import { LeagueConferenceSelectors } from './league-conferences.selectors';
import { ConferenceCreateDto, ConferenceDto } from '@cha/shared/entities';

@Injectable()
export class LeagueConferencesFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueConferenceSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueConferenceSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    LeagueConferenceSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    LeagueConferenceSelectors.selectSaved
  );

  conferences$: Observable<ConferenceDto[]> = this.store.select(
    LeagueConferenceSelectors.selectConferences
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
