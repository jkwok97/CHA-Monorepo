import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './team-stats.reducer';
import { Observable } from 'rxjs';
import { TeamStatsSelectors } from './team-stats.selectors';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { TeamStatsActions } from './team-stats.actions';

@Injectable()
export class TeamStatsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    TeamStatsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    TeamStatsSelectors.selectLoaded
  );

  teamStats$: Observable<StatTeamsHistoryDto[]> = this.store.select(
    TeamStatsSelectors.selectTeamStats
  );

  constructor(private store: Store<State>) {}

  getUserTeamStatsBySeason(seasonType: string) {
    this.store.dispatch(
      TeamStatsActions.getUserTeamStatsBySeason({ seasonType })
    );
  }
}
