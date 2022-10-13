import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-current-data.reducer';
import { LeagueCurrentDataActions } from './league-current-data.actions';
import { Observable } from 'rxjs';
import { LeagueCurrentDataSelectors } from './league-current-data.selectors';
import { LeagueDataDto } from '@cha/shared/entities';

@Injectable()
export class LeagueCurrentDataFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueCurrentDataSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueCurrentDataSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    LeagueCurrentDataSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    LeagueCurrentDataSelectors.selectSaved
  );

  data$: Observable<LeagueDataDto | null> = this.store.select(
    LeagueCurrentDataSelectors.selectCurrentData
  );

  constructor(private store: Store<State>) {}

  getData() {
    this.store.dispatch(LeagueCurrentDataActions.getData());
  }

  editData(data: LeagueDataDto) {
    this.store.dispatch(LeagueCurrentDataActions.editData({ data }));
  }
}
