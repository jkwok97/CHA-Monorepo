import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './home.reducer';
import { HomeActions } from './home.actions';
import { Observable } from 'rxjs';
import { HomeSelectors } from './home.selectors';
import { GetTransactionDto, StatUserTeamRecordDto } from '@cha/shared/entities';

@Injectable()
export class HomeFacade {
  teamRecordLoading$: Observable<boolean> = this.store.select(
    HomeSelectors.selectTeamRecordLoading
  );

  teamRecordLoaded$: Observable<boolean> = this.store.select(
    HomeSelectors.selectTeamRecordLoaded
  );

  teamRecord$: Observable<StatUserTeamRecordDto | null> = this.store.select(
    HomeSelectors.selectTeamRecord
  );

  playerSalaryLoaded$: Observable<boolean> = this.store.select(
    HomeSelectors.selectPlayerSalaryLoaded
  );

  goalieSalaryLoaded$: Observable<boolean> = this.store.select(
    HomeSelectors.selectGoaliesSalaryLoaded
  );

  totalTeamSalary$: Observable<number> = this.store.select(
    HomeSelectors.selectTotal
  );

  totalNextTeamSalary$: Observable<number> = this.store.select(
    HomeSelectors.selectNextTotal
  );

  totalPlayerCount$: Observable<number> = this.store.select(
    HomeSelectors.selectPlayersCount
  );

  totalProtectedPlayerCount$: Observable<number> = this.store.select(
    HomeSelectors.selectProtectedPlayerCount
  );

  recentTrades$: Observable<GetTransactionDto[]> = this.store.select(
    HomeSelectors.selectRecentTrades
  );

  constructor(private store: Store<State>) {}

  getUserTeamRecord(teamId: number) {
    this.store.dispatch(
      HomeActions.getUserTeamRecordBySeasonAndSeasonType({ teamId })
    );
  }

  getPlayerSalaries(teamName: string) {
    this.store.dispatch(HomeActions.getUserTeamPlayerSalaries({ teamName }));
  }

  getGoalieSalaries(teamName: string) {
    this.store.dispatch(HomeActions.getUserTeamGoaliesSalaries({ teamName }));
  }

  getTransactions(season: string) {
    this.store.dispatch(HomeActions.getTrades({ season }));
  }
}
