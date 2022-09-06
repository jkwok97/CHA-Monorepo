import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './league-trades.reducer';
import { GamesCurrentActions } from './league-trades.actions';
import { Observable } from 'rxjs';
import { GamesCurrentSelectors } from './league-trades.selectors';
import { GamesDto } from '@cha/shared/entities';

@Injectable()
export class GamesCurrentFacade {
  isLoading$: Observable<boolean> = this.store.select(
    GamesCurrentSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    GamesCurrentSelectors.selectLoaded
  );

  games$: Observable<GamesDto[]> = this.store.select(
    GamesCurrentSelectors.selectGames
  );

  gamesGrouped$: Observable<GamesDto[]> = this.store.select(
    GamesCurrentSelectors.selectGames
  );

  constructor(private store: Store<State>) {}

  getGames() {
    this.store.dispatch(GamesCurrentActions.getCurrent());
  }

  getNextGames() {
    this.store.dispatch(GamesCurrentActions.getNext());
  }

  getPreviousGames() {
    this.store.dispatch(GamesCurrentActions.getPrevious());
  }
}
