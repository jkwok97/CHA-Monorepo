import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './home-summary.reducer';
import { HomeSummaryActions } from './home-summary.actions';
import { Observable } from 'rxjs';
import { HomeSummarySelectors } from './home-summary.selectors';
import { StatUserTeamRecordDto } from '@cha/shared/entities';

@Injectable()
export class HomeSummaryFacade {
  isLoading$: Observable<boolean> = this.store.select(
    HomeSummarySelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    HomeSummarySelectors.selectLoaded
  );

  teamRecord$: Observable<StatUserTeamRecordDto | null> = this.store.select(
    HomeSummarySelectors.selectTeamRecord
  );

  constructor(private store: Store<State>) {}

  getUserTeamRecord(teamId: number) {
    this.store.dispatch(
      HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonType({ teamId })
    );
  }
}
