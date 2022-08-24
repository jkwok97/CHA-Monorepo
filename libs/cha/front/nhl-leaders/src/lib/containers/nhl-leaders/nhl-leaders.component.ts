import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserTeamFacade } from '@cha/domain/core';
import { NhlPlayerDto, NhlGoalieDto, TeamDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { NhlLeadersFacade } from '../../+state/nhl-leaders.facade';

@Component({
  selector: 'cha-front-nhl-leaders',
  templateUrl: './nhl-leaders.component.html',
  styleUrls: ['./nhl-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlLeadersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  goalsLeaders$: Observable<NhlPlayerDto[]>;
  pointsLeaders$: Observable<NhlPlayerDto[]>;
  assistsLeaders$: Observable<NhlPlayerDto[]>;
  defenseGoalsLeaders$: Observable<NhlPlayerDto[]>;
  defenseAssistsLeaders$: Observable<NhlPlayerDto[]>;
  defensePointsLeaders$: Observable<NhlPlayerDto[]>;
  rookieGoalsLeaders$: Observable<NhlPlayerDto[]>;
  rookieAssistsLeaders$: Observable<NhlPlayerDto[]>;
  rookiePointsLeaders$: Observable<NhlPlayerDto[]>;
  gaaLeaders$: Observable<NhlGoalieDto[]>;
  savePctLeaders$: Observable<NhlGoalieDto[]>;
  shutoutLeaders$: Observable<NhlGoalieDto[]>;
  currentTeam$: Observable<TeamDto | undefined>;

  backgroundColor!: string;

  constructor(
    private nhlLeadersFacade: NhlLeadersFacade,
    private userTeamFacade: UserTeamFacade
  ) {
    this.isLoaded$ = this.nhlLeadersFacade.isLoaded$;
    this.isLoading$ = this.nhlLeadersFacade.isLoading$;
    this.goalsLeaders$ = this.nhlLeadersFacade.goals$;
    this.pointsLeaders$ = this.nhlLeadersFacade.points$;
    this.assistsLeaders$ = this.nhlLeadersFacade.assists$;
    this.defenseGoalsLeaders$ = this.nhlLeadersFacade.defenseGoals$;
    this.defenseAssistsLeaders$ = this.nhlLeadersFacade.defenseAssists$;
    this.defensePointsLeaders$ = this.nhlLeadersFacade.defensePoints$;
    this.rookieGoalsLeaders$ = this.nhlLeadersFacade.rookieGoals$;
    this.rookieAssistsLeaders$ = this.nhlLeadersFacade.rookieAssists$;
    this.rookiePointsLeaders$ = this.nhlLeadersFacade.rookiePoints$;
    this.gaaLeaders$ = this.nhlLeadersFacade.gaa$;
    this.savePctLeaders$ = this.nhlLeadersFacade.savePct$;
    this.shutoutLeaders$ = this.nhlLeadersFacade.shutouts$;
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
    this.nhlLeadersFacade.getLeaders();
  }
}
