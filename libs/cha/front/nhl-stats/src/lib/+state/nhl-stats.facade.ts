import { Injectable } from '@angular/core';
import { NhlPlayerStatDto, NhlGoalieStatDto } from '@cha/shared/entities';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NhlStatsActions } from './nhl-stats.actions';
import { State } from './nhl-stats.reducer';
import { NhlStatsSelectors } from './nhl-stats.selectors';

@Injectable()
export class NhlStatsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    NhlStatsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    NhlStatsSelectors.selectLoaded
  );

  isAllStatsLoaded$: Observable<boolean> = this.store.select(
    NhlStatsSelectors.selectAllLoaded
  );

  rookieStats$: Observable<NhlPlayerStatDto[]> = this.store.select(
    NhlStatsSelectors.selectRookieStats
  );

  skaterStats$: Observable<NhlPlayerStatDto[]> = this.store.select(
    NhlStatsSelectors.selectSkaterStats
  );

  goalieStats$: Observable<NhlGoalieStatDto[]> = this.store.select(
    NhlStatsSelectors.selectGoalieStats
  );

  total$: Observable<number> = this.store.select(NhlStatsSelectors.selectTotal);

  constructor(private store: Store<State>) {}

  getSportsnetStats(season: string, season_type: string) {
    this.store.dispatch(
      NhlStatsActions.getSportsnetStats({
        season,
        season_type,
      })
    );
  }

  getRookieStats(
    statType: string,
    sortType: string,
    sortOrder: string,
    start: number,
    pageSize: number
  ) {
    this.store.dispatch(
      NhlStatsActions.getRookieStats({
        statType,
        sortType,
        sortOrder,
        start,
        pageSize,
      })
    );
  }
}
