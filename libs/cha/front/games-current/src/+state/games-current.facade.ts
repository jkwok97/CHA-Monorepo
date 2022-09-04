import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './games-current.reducer';
import { GamesCurrentActions } from './games-current.actions';
import { Observable } from 'rxjs';
import { GamesCurrentSelectors } from './games-current.selectors';
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
    GamesCurrentSelectors.selectGamesGrouped
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
