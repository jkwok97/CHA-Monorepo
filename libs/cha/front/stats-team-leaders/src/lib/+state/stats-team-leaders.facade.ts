import { Injectable } from '@angular/core';
import { statTeamDto } from '@cha/shared/entities';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LeagueStatsTeamActions } from './stats-team-leaders.actions';
import { State } from './stats-team-leaders.reducer';
import { LeagueStatsTeamSelectors } from './stats-team-leaders.selectors';

@Injectable()
export class LeagueStatsTeamFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueStatsTeamSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueStatsTeamSelectors.selectLoaded
  );

  leagueTeamStats$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStats
  );

  leagueTeamStandings$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsStandings
  );

  leagueTeamWinningStreak$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsWinningStreak
  );

  leagueTeamPenalties$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsPenalties
  );

  leagueTeamGoalDiff$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsGoalDiff
  );
  leagureTeamShotDiff$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsShotsDiff
  )
  leagueTeamFaceoffs$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsFaceoffs
  )
  leagueTeamPassing$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsPassing
  )
  leagueTeamPp$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsPp
  );

  leagueTeamPk$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsPk
  );

  constructor(private store: Store<State>) {}

  getLeagueTeamStats(seasonType: string) {
    this.store.dispatch(
      LeagueStatsTeamActions.getLeagueTeamStats({ seasonType })
    );
  }
}
