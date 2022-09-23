import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './teams-summary.reducer';
import { TeamsSummaryActions } from './teams-summary.actions';
import { Observable } from 'rxjs';
import { TeamsSummarySelectors } from './teams-summary.selectors';
import {
  NhlGoalieStatDto,
  NhlPlayerStatDto,
  SalariesAndRatingsDto,
  StatGoalieAllDto,
  StatPlayerAllDto,
  StatUserTeamRecordDto,
} from '@cha/shared/entities';

@Injectable()
export class TeamsSummaryFacade {
  isLoading$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectLoaded
  );

  userId$: Observable<number | undefined> = this.store.select(
    TeamsSummarySelectors.selectUserId
  );

  teamRecordLoading$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectTeamRecordLoading
  );

  teamRecordLoaded$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectTeamRecordLoaded
  );

  teamRecord$: Observable<StatUserTeamRecordDto | null> = this.store.select(
    TeamsSummarySelectors.selectTeamRecord
  );

  playerSalaryLoaded$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectPlayerSalaryLoaded
  );

  goalieSalaryLoaded$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectGoaliesSalaryLoaded
  );

  totalTeamSalary$: Observable<number> = this.store.select(
    TeamsSummarySelectors.selectTotal
  );

  totalNextTeamSalary$: Observable<number> = this.store.select(
    TeamsSummarySelectors.selectNextTotal
  );

  totalPlayerCount$: Observable<number> = this.store.select(
    TeamsSummarySelectors.selectPlayersCount
  );

  leftWingers$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectLeftWingSalaries
  );

  centers$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectCenterSalaries
  );

  rightWingers$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectRightWingSalaries
  );

  leftDefenseman$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectLeftDefenseSalaries
  );

  rightDefenseman$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectRightDefenseSalaries
  );

  goalies$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectGoalieSalariesSorted
  );

  currentPlayerCHAStats$: Observable<StatPlayerAllDto> = this.store.select(
    TeamsSummarySelectors.selectCurrentPlayerStat
  );

  currentGoalieCHAStats$: Observable<StatGoalieAllDto> = this.store.select(
    TeamsSummarySelectors.selectCurrentGoalieStat
  );

  currentNHLStats$: Observable<NhlGoalieStatDto | NhlPlayerStatDto> =
    this.store.select(TeamsSummarySelectors.selectCurrentNHLStat);

  statsLoading$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectStatsLoading
  );

  constructor(private store: Store<State>) {}

  getUserIdByTeamId(teamId: number) {
    this.store.dispatch(TeamsSummaryActions.getUserIdByTeamId({ teamId }));
  }

  getUserTeamRecord(teamId: number) {
    this.store.dispatch(
      TeamsSummaryActions.getUserTeamRecordBySeasonAndSeasonType({ teamId })
    );
  }

  getPlayerSalaries(teamName: string) {
    this.store.dispatch(
      TeamsSummaryActions.getUserTeamPlayerSalaries({ teamName })
    );
  }

  getGoalieSalaries(teamName: string) {
    this.store.dispatch(
      TeamsSummaryActions.getUserTeamGoaliesSalaries({ teamName })
    );
  }

  getCHACurrentPlayerStats(playerId: number) {
    this.store.dispatch(
      TeamsSummaryActions.getCHACurrentPlayerStats({ playerId })
    );
  }

  getCHACurrentGoalieStats(playerId: number) {
    this.store.dispatch(
      TeamsSummaryActions.getCHACurrentGoalieStats({ playerId })
    );
  }

  getNHLCurrentStats(playerId: number) {
    this.store.dispatch(TeamsSummaryActions.getNHLCurrentStats({ playerId }));
  }
}
