import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-waivers.reducer';
import { LeagueWaiversActions } from './league-waivers.actions';
import { Observable } from 'rxjs';
import { LeagueWaiversSelectors } from './league-waivers.selectors';
import { WaiversDto } from '@cha/shared/entities';

@Injectable()
export class LeagueSalariesAndRatingsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueWaiversSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueWaiversSelectors.selectLoaded
  );

  waivers$: Observable<WaiversDto[]> = this.store.select(
    LeagueWaiversSelectors.selectWaivers
  );

  constructor(private store: Store<State>) {}

  getWaivers() {
    this.store.dispatch(LeagueWaiversActions.getWaivers());
  }
}
