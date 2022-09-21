import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './home-players.reducer';
import { HomePlayersActions } from './home-players.actions';
import { Observable } from 'rxjs';
import { HomePlayersSelectors } from './home-players.selectors';
import {
  StatPlayersHistoryDto,
  StatUserPlayersHistoryDto,
} from '@cha/shared/entities';

@Injectable()
export class HomePlayersFacade {
  isLoading$: Observable<boolean> = this.store.select(
    HomePlayersSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    HomePlayersSelectors.selectLoaded
  );

  allStats$: Observable<StatUserPlayersHistoryDto[]> = this.store.select(
    HomePlayersSelectors.selectAll
  );

  playersStats$: Observable<StatPlayersHistoryDto[]> = this.store.select(
    HomePlayersSelectors.selectPlayersStats
  );

  constructor(private store: Store<State>) {}

  getUserPlayerStatsBySeason(seasonType: string) {
    this.store.dispatch(
      HomePlayersActions.getUserPlayersStatsBySeason({ seasonType })
    );
  }

  getUserPlayerAllTimeStatsBySeason(seasonType: string) {
    this.store.dispatch(
      HomePlayersActions.getUserPlayersAllTimeStatsBySeason({ seasonType })
    );
  }
}
