import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserTeamFacade } from '@cha/domain/core';
import {
  PlayoffStandingsModel,
  StatTeamPlayoffsDto,
  TeamDto,
} from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { GamesPlayoffsFacade } from '../../+state/games-playoffs.facade';

@Component({
  selector: 'cha-front-games-playoffs',
  templateUrl: './games-playoffs.component.html',
  styleUrls: ['./games-playoffs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesPlayoffsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  currentTeam$: Observable<TeamDto | undefined>;
  westernTeams$: Observable<StatTeamPlayoffsDto[]>;
  easternTeams$: Observable<StatTeamPlayoffsDto[]>;

  backgroundColor!: string;

  constructor(
    private gamesPlayoffsFacade: GamesPlayoffsFacade,
    private userTeamFacade: UserTeamFacade
  ) {
    this.isLoading$ = this.gamesPlayoffsFacade.isLoading$;
    this.isLoaded$ = this.gamesPlayoffsFacade.isLoaded$;
    this.westernTeams$ = this.gamesPlayoffsFacade.westTeams$;
    this.easternTeams$ = this.gamesPlayoffsFacade.eastTeams$;
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
    this.gamesPlayoffsFacade.getPlayoffStandings();
  }
}
