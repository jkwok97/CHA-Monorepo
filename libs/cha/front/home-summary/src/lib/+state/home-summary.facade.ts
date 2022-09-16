import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './home-summary.reducer';
import { HomeSummaryActions } from './home-summary.actions';
import { Observable } from 'rxjs';
import { HomeSummarySelectors } from './home-summary.selectors';
import { StatUserTeamRecordDto } from '@cha/shared/entities';

@Injectable()
export class HomeSummaryFacade {
  teamRecordLoading$: Observable<boolean> = this.store.select(
    HomeSummarySelectors.selectTeamRecordLoading
  );

  teamRecordLoaded$: Observable<boolean> = this.store.select(
    HomeSummarySelectors.selectTeamRecordLoaded
  );

  teamRecord$: Observable<StatUserTeamRecordDto | null> = this.store.select(
    HomeSummarySelectors.selectTeamRecord
  );

  playerSalaryLoaded$: Observable<boolean> = this.store.select(
    HomeSummarySelectors.selectPlayerSalaryLoaded
  );

  goalieSalaryLoaded$: Observable<boolean> = this.store.select(
    HomeSummarySelectors.selectGoaliesSalaryLoaded
  );

  totalTeamSalary$: Observable<number> = this.store.select(
    HomeSummarySelectors.selectTotal
  );

  totalPlayerCount$: Observable<number> = this.store.select(
    HomeSummarySelectors.selectPlayersCount
  );

  constructor(private store: Store<State>) {}

  getUserTeamRecord(teamId: number) {
    this.store.dispatch(
      HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonType({ teamId })
    );
  }

  getPlayerSalaries(teamName: string) {
    this.store.dispatch(
      HomeSummaryActions.getUserTeamPlayerSalaries({ teamName })
    );
  }

  getGoalieSalaries(teamName: string) {
    this.store.dispatch(
      HomeSummaryActions.getUserTeamGoaliesSalaries({ teamName })
    );
  }
}
