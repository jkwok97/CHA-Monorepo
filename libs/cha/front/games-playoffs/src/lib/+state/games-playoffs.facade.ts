import { Injectable } from '@angular/core';
import { PlayoffStandingsModel } from '@cha/shared/entities';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GamesPlayoffsActions } from './games-playoffs.actions';
import { State } from './games-playoffs.reducer';
import { GamesPlayoffsSelectors } from './games-playoffs.selectors';

@Injectable()
export class GamesPlayoffsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    GamesPlayoffsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    GamesPlayoffsSelectors.selectLoaded
  );

  playoffStandings$: Observable<PlayoffStandingsModel> = this.store.select(
    GamesPlayoffsSelectors.selectPlayoffStandings
  );

  constructor(private store: Store<State>) {}

  getPlayoffStandings() {
    this.store.dispatch(GamesPlayoffsActions.getStandings());
  }
}
