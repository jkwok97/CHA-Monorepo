import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './player-stats.reducer';
import { Observable } from 'rxjs';
import {
  StatPlayersHistoryDto,
  StatUserPlayersHistoryDto,
} from '@cha/shared/entities';
import { PlayerStatsActions } from './player-stats.actions';
import { PlayerStatsSelectors } from './player-stats.selectors';

@Injectable()
export class PlayerStatsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    PlayerStatsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    PlayerStatsSelectors.selectLoaded
  );

  allStats$: Observable<StatUserPlayersHistoryDto[]> = this.store.select(
    PlayerStatsSelectors.selectAll
  );

  playersStats$: Observable<StatPlayersHistoryDto[]> = this.store.select(
    PlayerStatsSelectors.selectPlayersStats
  );

  constructor(private store: Store<State>) {}

  getUserPlayerStatsBySeason(seasonType: string) {
    this.store.dispatch(
      PlayerStatsActions.getUserPlayersStatsBySeason({ seasonType })
    );
  }

  getUserPlayerAllTimeStatsBySeason(seasonType: string) {
    this.store.dispatch(
      PlayerStatsActions.getUserPlayersAllTimeStatsBySeason({ seasonType })
    );
  }
}
