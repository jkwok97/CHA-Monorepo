import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { TeamDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { LeagueTeamsFacade } from '../../+state/league-teams.facade';

@Component({
  selector: 'cha-admin-league-teams',
  templateUrl: './league-teams.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  teams$: Observable<TeamDto[]>;

  isMobile!: boolean;

  constructor(
    private leagueTeamsFacade: LeagueTeamsFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.leagueTeamsFacade.isLoaded$;
    this.isLoading$ = this.leagueTeamsFacade.isLoading$;
    this.teams$ = this.leagueTeamsFacade.teams$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.leagueTeamsFacade.getTeams();
    this.leagueTeamsFacade.getUsers();
    this.leagueTeamsFacade.getDivisions();
  }
}
