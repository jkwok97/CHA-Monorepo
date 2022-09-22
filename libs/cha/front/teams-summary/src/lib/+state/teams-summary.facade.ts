import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './teams-summary.reducer';
import { TeamsSummaryActions } from './teams-summary.actions';
import { Observable } from 'rxjs';
import { TeamsSummarySelectors } from './teams-summary.selectors';
import {
  StatTeamsHistoryDto,
  StatUserTeamHistoryDto,
} from '@cha/shared/entities';

@Injectable()
export class TeamsSummaryFacade {
  isLoading$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectLoaded
  );

  teamStats$: Observable<StatTeamsHistoryDto[]> = this.store.select(
    TeamsSummarySelectors.selectTeamStats
  );

  userId$: Observable<number | undefined> = this.store.select(
    TeamsSummarySelectors.selectUserId
  );

  constructor(private store: Store<State>) {}

  getUserIdByTeamId(teamId: number) {
    this.store.dispatch(TeamsSummaryActions.getUserIdByTeamId({ teamId }));
  }

  getUserTeamStatsBySeason(seasonType: string) {
    this.store.dispatch(
      TeamsSummaryActions.getUserTeamStatsBySeason({ seasonType })
    );
  }
}
