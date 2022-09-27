import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './home-summary.reducer';
import { HomeSummaryActions } from './home-summary.actions';
import { Observable } from 'rxjs';
import { HomeSummarySelectors } from './home-summary.selectors';
import {
  NhlGoalieStatDto,
  NhlPlayerStatDto,
  SalariesAndRatingsDto,
  StatGoalieAllDto,
  StatPlayerAllDto,
  StatUserTeamRecordDto,
} from '@cha/shared/entities';

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

  totalNextTeamSalary$: Observable<number> = this.store.select(
    HomeSummarySelectors.selectNextTotal
  );

  totalPlayerCount$: Observable<number> = this.store.select(
    HomeSummarySelectors.selectPlayersCount
  );

  leftWingersByRating$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    HomeSummarySelectors.selectLeftWingSalariesByRating
  );

  centersByRating$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    HomeSummarySelectors.selectCenterSalariesByRating
  );

  rightWingersByRating$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(HomeSummarySelectors.selectRightWingSalariesByRating);

  leftDefensemanByRating$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(HomeSummarySelectors.selectLeftDefenseSalariesByRating);

  rightDefensemanByRating$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(HomeSummarySelectors.selectRightDefenseSalariesByRating);

  goaliesByRating$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    HomeSummarySelectors.selectGoalieSalariesSortedByRating
  );

  leftWingersByNhlStats$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(HomeSummarySelectors.selectLeftWingSalariesByNhlStats);

  centersByNhlStats$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    HomeSummarySelectors.selectCenterSalariesByNhlStats
  );

  rightWingersByNhlStats$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(HomeSummarySelectors.selectRightWingSalariesByNhlStats);

  leftDefensemanByNhlStats$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(HomeSummarySelectors.selectLeftDefenseSalariesByNhlStats);

  rightDefensemanByNhlStats$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(
      HomeSummarySelectors.selectRightDefenseSalariesByNhlStats
    );

  goaliesByNhlStats$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    HomeSummarySelectors.selectGoalieSalariesSortedByNhlStats
  );

  currentPlayerCHAStats$: Observable<StatPlayerAllDto> = this.store.select(
    HomeSummarySelectors.selectCurrentPlayerStat
  );

  currentGoalieCHAStats$: Observable<StatGoalieAllDto> = this.store.select(
    HomeSummarySelectors.selectCurrentGoalieStat
  );

  currentNHLStats$: Observable<NhlGoalieStatDto | NhlPlayerStatDto> =
    this.store.select(HomeSummarySelectors.selectCurrentNHLStat);

  statsLoading$: Observable<boolean> = this.store.select(
    HomeSummarySelectors.selectStatsLoading
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

  getCHACurrentPlayerStats(playerId: number) {
    this.store.dispatch(
      HomeSummaryActions.getCHACurrentPlayerStats({ playerId })
    );
  }

  getCHACurrentGoalieStats(playerId: number) {
    this.store.dispatch(
      HomeSummaryActions.getCHACurrentGoalieStats({ playerId })
    );
  }

  getNHLCurrentStats(playerId: number) {
    this.store.dispatch(HomeSummaryActions.getNHLCurrentStats({ playerId }));
  }
}
