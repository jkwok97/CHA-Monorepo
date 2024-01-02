import { Injectable } from '@angular/core';
import {
  StatPlayerLeaderDto,
  StatPlayerLeadersDto,
} from '@cha/shared/entities';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LeagueStatsPlayersActions } from './stats-players-leaders.actions';
import { State } from './stats-players-leaders.reducer';
import { LeagueStatsPlayersSelectors } from './stats-players-leaders.selectors';

@Injectable()
export class LeagueStatsPlayersFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueStatsPlayersSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueStatsPlayersSelectors.selectLoaded
  );

  allLeaders$: Observable<StatPlayerLeadersDto | null> = this.store.select(
    LeagueStatsPlayersSelectors.selectAllLeaders
  );

  hitsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectHitsLeaders
  );

  currStreakLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectCurrentStreakLeaders
  );

  longStreakLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectLongStreakLeaders
  );

  bestPlusMinusLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectBestPlusMinusLeaders
  );

  worstPlusMinusLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectWorstPlusMinusLeaders
  );

  minutesLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectMinutesLeaders
  );

  penaltiesLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectPenaltiesLeaders
  );

  shotsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectShotsLeaders
  );

  blockedShotsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectBlockedShotsLeaders
  );

  shGoalsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectShGoalsLeaders
  );

  ppGoalsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectPpGoalsLeaders
  );

  gwGoalsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectGwGoalsLeaders
  );

  goalsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectGoalsLeaders
  );

  assistsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectAssistsLeaders
  );

  rookieLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectRookiesLeaders
  );

  rookieGoalsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectRookieGoalsLeaders
  );

  defenseLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectDefenseLeaders
  );

  defenseGoalLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectDefenseGoalLeaders
  );

  pointsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectPointsLeaders
  );

  constructor(private store: Store<State>) {}

  getLeagueTeamStats(seasonType: string) {
    this.store.dispatch(LeagueStatsPlayersActions.getLeaders({ seasonType }));
  }
}
