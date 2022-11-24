import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade, UserTeamFacade } from '@cha/domain/core';
import { StatGoalieLeaderDto, TeamDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { LeagueStatsGoaliesFacade } from '../../+state/stats-goalie-leader.facade';

@Component({
  selector: 'cha-front-stats-goalie-leaders',
  templateUrl: './stats-goalie-leaders.component.html',
  styleUrls: ['./stats-goalie-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsGoalieLeadersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  winsLeaders$: Observable<StatGoalieLeaderDto[]>;
  gaaLeaders$: Observable<StatGoalieLeaderDto[]>;
  savePctLeaders$: Observable<StatGoalieLeaderDto[]>;
  shotsFacedLeaders$: Observable<StatGoalieLeaderDto[]>;
  shutoutLeaders$: Observable<StatGoalieLeaderDto[]>;
  currentTeam$: Observable<TeamDto | undefined>;
  minGames$: Observable<number>;

  backgroundColor!: string;

  constructor(
    private leagueStatsGoalieFacade: LeagueStatsGoaliesFacade,
    private leagueDataFacade: LeagueDataFacade,
    private userTeamFacade: UserTeamFacade
  ) {
    this.isLoaded$ = this.leagueStatsGoalieFacade.isLoaded$;
    this.isLoading$ = this.leagueStatsGoalieFacade.isLoading$;

    this.winsLeaders$ = this.leagueStatsGoalieFacade.winsLeaders$;
    this.gaaLeaders$ = this.leagueStatsGoalieFacade.gaaLeaders$;
    this.savePctLeaders$ = this.leagueStatsGoalieFacade.savePctLeaders$;
    this.shotsFacedLeaders$ = this.leagueStatsGoalieFacade.shotsFacedLeaders$;
    this.shutoutLeaders$ = this.leagueStatsGoalieFacade.shutoutsLeaders$;
    this.minGames$ = this.leagueDataFacade.minGames$;

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
    this.leagueStatsGoalieFacade.getLeagueTeamStats();
  }
}
