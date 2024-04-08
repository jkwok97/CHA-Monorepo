import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserTeamFacade } from '@cha/domain/core';
import { StatPlayerLeaderDto, TeamDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { LeagueStatsPlayersFacade } from '../../+state/stats-players-leaders.facade';

@Component({
  selector: 'cha-front-stats-players-leaders',
  templateUrl: './stats-players-leaders.component.html',
  styleUrls: ['./stats-players-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPlayersLeadersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  pointsLeaders$: Observable<StatPlayerLeaderDto[]>;
  pointsAboveExpectedLeaders$: Observable<StatPlayerLeaderDto[]>;
  pointsBelowExpectedLeaders$: Observable<StatPlayerLeaderDto[]>;
  defenseLeaders$: Observable<StatPlayerLeaderDto[]>;
  defenseGoalLeaders$: Observable<StatPlayerLeaderDto[]>;
  rookieLeaders$: Observable<StatPlayerLeaderDto[]>;
  rookieGoalsLeaders$: Observable<StatPlayerLeaderDto[]>;
  goalsLeaders$: Observable<StatPlayerLeaderDto[]>;
  assistsLeaders$: Observable<StatPlayerLeaderDto[]>;
  shotsLeaders$: Observable<StatPlayerLeaderDto[]>;
  minutesLeaders$: Observable<StatPlayerLeaderDto[]>;
  ppGoalsLeaders$: Observable<StatPlayerLeaderDto[]>;
  gwGoalsLeaders$: Observable<StatPlayerLeaderDto[]>;
  shGoalsLeaders$: Observable<StatPlayerLeaderDto[]>;
  penaltyLeaders$: Observable<StatPlayerLeaderDto[]>;
  blockedShotsLeaders$: Observable<StatPlayerLeaderDto[]>;
  hitsLeaders$: Observable<StatPlayerLeaderDto[]>;
  currStreakLeaders$: Observable<StatPlayerLeaderDto[]>;
  longStreakLeaders$: Observable<StatPlayerLeaderDto[]>;
  bestPlusMinusLeaders$: Observable<StatPlayerLeaderDto[]>;
  worstPlusMinusLeaders$: Observable<StatPlayerLeaderDto[]>;
  faceOffLeaders$: Observable<StatPlayerLeaderDto[]>;
  shootingLeaders$: Observable<StatPlayerLeaderDto[]>;
  cornerLeaders$: Observable<StatPlayerLeaderDto[]>;
  passingLeaders$: Observable<StatPlayerLeaderDto[]>;
  currentTeam$: Observable<TeamDto | undefined>;

  backgroundColor!: string;
  selectSeasonOptions = [
    { label: 'Regular', value: 'Regular' },
    { label: 'Playoffs', value: 'Playoffs', disabled: false },
  ];

  constructor(
    private leagueStatsPlayersFacade: LeagueStatsPlayersFacade,
    private userTeamFacade: UserTeamFacade
  ) {
    this.isLoaded$ = this.leagueStatsPlayersFacade.isLoaded$;
    this.isLoading$ = this.leagueStatsPlayersFacade.isLoading$;

    this.pointsLeaders$ = this.leagueStatsPlayersFacade.pointsLeaders$;
    this.defenseLeaders$ = this.leagueStatsPlayersFacade.defenseLeaders$;
    this.defenseGoalLeaders$ =
      this.leagueStatsPlayersFacade.defenseGoalLeaders$;
    this.rookieLeaders$ = this.leagueStatsPlayersFacade.rookieLeaders$;
    this.rookieGoalsLeaders$ =
      this.leagueStatsPlayersFacade.rookieGoalsLeaders$;
    this.goalsLeaders$ = this.leagueStatsPlayersFacade.goalsLeaders$;
    this.assistsLeaders$ = this.leagueStatsPlayersFacade.assistsLeaders$;
    this.shotsLeaders$ = this.leagueStatsPlayersFacade.shotsLeaders$;
    this.minutesLeaders$ = this.leagueStatsPlayersFacade.minutesLeaders$;
    this.ppGoalsLeaders$ = this.leagueStatsPlayersFacade.ppGoalsLeaders$;
    this.gwGoalsLeaders$ = this.leagueStatsPlayersFacade.gwGoalsLeaders$;
    this.shGoalsLeaders$ = this.leagueStatsPlayersFacade.shGoalsLeaders$;
    this.penaltyLeaders$ = this.leagueStatsPlayersFacade.penaltiesLeaders$;
    this.faceOffLeaders$ = this.leagueStatsPlayersFacade.faceOffLeaders$;
    this.shootingLeaders$ = this.leagueStatsPlayersFacade.shootingLeaders$;
    this.cornerLeaders$ = this.leagueStatsPlayersFacade.cornerLeaders$;
    this.passingLeaders$ = this.leagueStatsPlayersFacade.passingLeaders$;
    this.blockedShotsLeaders$ =
      this.leagueStatsPlayersFacade.blockedShotsLeaders$;
    this.hitsLeaders$ = this.leagueStatsPlayersFacade.hitsLeaders$;
    this.currStreakLeaders$ = this.leagueStatsPlayersFacade.currStreakLeaders$;
    this.longStreakLeaders$ = this.leagueStatsPlayersFacade.longStreakLeaders$;
    this.bestPlusMinusLeaders$ =
      this.leagueStatsPlayersFacade.bestPlusMinusLeaders$;
    this.worstPlusMinusLeaders$ =
      this.leagueStatsPlayersFacade.worstPlusMinusLeaders$;
    this.pointsAboveExpectedLeaders$ =
      this.leagueStatsPlayersFacade.pointsAboveExpectedLeaders$;
    this.pointsBelowExpectedLeaders$ =
      this.leagueStatsPlayersFacade.pointsBelowExpectedLeaders$;

    this.currentTeam$ = this.userTeamFacade.currentUserTeam$;

    this.currentTeam$
      .pipe(first())
      .subscribe((userTeam: TeamDto | undefined) => {
        if (userTeam) {
          this.backgroundColor = userTeam.teamcolor;
        }
      });
  }

  ngOnInit(): void {
    this.leagueStatsPlayersFacade.getLeagueTeamStats('Regular');
  }

  onSeasonOptionChanged(seasonType: string) {
    this.leagueStatsPlayersFacade.getLeagueTeamStats(seasonType);
  }
}
