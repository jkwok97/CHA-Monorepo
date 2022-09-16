import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './history-players.reducer';
import { HistoryPlayersActions } from './history-players.actions';
import { Observable } from 'rxjs';
import { HistoryPlayersSelectors } from './history-players.selectors';
import { StatPlayersHistoryDto } from '@cha/shared/entities';

@Injectable()
export class HistoryPlayersFacade {
  isLoading$: Observable<boolean> = this.store.select(
    HistoryPlayersSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    HistoryPlayersSelectors.selectLoaded
  );

  allStats$: Observable<StatPlayersHistoryDto[]> = this.store.select(
    HistoryPlayersSelectors.selectAll
  );

  forwardStats$: Observable<StatPlayersHistoryDto[]> = this.store.select(
    HistoryPlayersSelectors.selectForwards
  );

  defenseStats$: Observable<StatPlayersHistoryDto[]> = this.store.select(
    HistoryPlayersSelectors.selectDefense
  );

  constructor(private store: Store<State>) {}

  getAllTimePlayersStatBySeason(seasonType: string) {
    this.store.dispatch(
      HistoryPlayersActions.getPlayersStatsBySeason({ seasonType })
    );
  }

  getAllTimePlayersStatSummedBySeason(seasonType: string) {
    this.store.dispatch(
      HistoryPlayersActions.getPlayersStatsBySeasonSummed({ seasonType })
    );
  }
}
