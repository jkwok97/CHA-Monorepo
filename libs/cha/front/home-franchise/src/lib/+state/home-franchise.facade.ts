import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './home-franchise.reducer';
import { HomeFranchiseActions } from './home-franchise.actions';
import { Observable } from 'rxjs';
import { HomeFranchiseSelectors } from './home-franchise.selectors';
import { StatTeamsHistoryDto } from '@cha/shared/entities';

@Injectable()
export class HomeFranchiseFacade {
  isLoading$: Observable<boolean> = this.store.select(
    HomeFranchiseSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    HomeFranchiseSelectors.selectLoaded
  );

  teamStats$: Observable<StatTeamsHistoryDto[]> = this.store.select(
    HomeFranchiseSelectors.selectTeamStats
  );

  constructor(private store: Store<State>) {}

  getUserTeamStatsBySeason(seasonType: string) {
    this.store.dispatch(
      HomeFranchiseActions.getUserTeamStatsBySeason({ seasonType })
    );
  }
}
