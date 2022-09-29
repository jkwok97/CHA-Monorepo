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
  TeamDto,
  UserDto,
} from '@cha/shared/entities';

@Injectable()
export class TeamsSummaryFacade {
  isLoading$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectLoaded
  );

  user$: Observable<UserDto | undefined> = this.store.select(
    TeamsSummarySelectors.selectUser
  );

  userId$: Observable<number | undefined> = this.store.select(
    TeamsSummarySelectors.selectUserId
  );

  userTeam$: Observable<TeamDto | undefined> = this.store.select(
    TeamsSummarySelectors.selectTeam
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

  playerSalaryLoading$: Observable<boolean> = this.store.select(
    TeamsSummarySelectors.selectPlayerSalaryLoading
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

  leftWingersByRating$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectLeftWingSalariesByRating
  );

  centersByRating$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectCenterSalariesByRating
  );

  rightWingersByRating$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(TeamsSummarySelectors.selectRightWingSalariesByRating);

  leftDefensemanByRating$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(TeamsSummarySelectors.selectLeftDefenseSalariesByRating);

  rightDefensemanByRating$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(TeamsSummarySelectors.selectRightDefenseSalariesByRating);

  goaliesByRating$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectGoalieSalariesSortedByRating
  );

  leftWingersByNhlStats$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(TeamsSummarySelectors.selectLeftWingSalariesByNhlStats);

  centersByNhlStats$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectCenterSalariesByNhlStats
  );

  rightWingersByNhlStats$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(TeamsSummarySelectors.selectRightWingSalariesByNhlStats);

  leftDefensemanByNhlStats$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(
      TeamsSummarySelectors.selectLeftDefenseSalariesByNhlStats
    );

  rightDefensemanByNhlStats$: Observable<SalariesAndRatingsDto[]> =
    this.store.select(
      TeamsSummarySelectors.selectRightDefenseSalariesByNhlStats
    );

  goaliesByNhlStats$: Observable<SalariesAndRatingsDto[]> = this.store.select(
    TeamsSummarySelectors.selectGoalieSalariesSortedByNhlStats
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

  forwardSalaries$: Observable<any[]> = this.store.select(
    TeamsSummarySelectors.selectForwardSalaries
  );

  defenseSalaries$: Observable<any[]> = this.store.select(
    TeamsSummarySelectors.selectDefenseSalaries
  );

  goalieSalaries$: Observable<any[]> = this.store.select(
    TeamsSummarySelectors.selectGoalieSalariesFiltered
  );

  constructor(private store: Store<State>) {}

  getUserByTeamId(teamId: number) {
    this.store.dispatch(TeamsSummaryActions.getUserByTeamId({ teamId }));
  }

  getUserTeam(userId: number) {
    this.store.dispatch(TeamsSummaryActions.getUserTeam({ userId }));
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

  reset() {
    this.store.dispatch(TeamsSummaryActions.reset());
  }
}
