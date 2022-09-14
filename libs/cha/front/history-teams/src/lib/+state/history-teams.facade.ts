import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './history-teams.reducer';
import { HistoryTeamsActions } from './history-teams.actions';
import { Observable } from 'rxjs';
import { HistoryTeamsSelectors } from './history-teams.selectors';
import { StatTeamsHistoryDto } from '@cha/shared/entities';

@Injectable()
export class HistoryTeamsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    HistoryTeamsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    HistoryTeamsSelectors.selectLoaded
  );

  allStats$: Observable<StatTeamsHistoryDto[]> = this.store.select(
    HistoryTeamsSelectors.selectAll
  );

  constructor(private store: Store<State>) {}

  getAllTimeTeamsStatBySeason(seasonType: string) {
    this.store.dispatch(
      HistoryTeamsActions.getTeamsStatsBySeason({ seasonType })
    );
  }
}
