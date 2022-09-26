import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayFacade } from '@cha/domain/core';
import { TeamDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, first, map, Observable } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-teams-summary',
  templateUrl: './teams-summary.component.html',
  styleUrls: ['./teams-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryComponent {
  isLoading$: Observable<boolean>;
  userTeam$: Observable<TeamDto | undefined>;
  
  isMobile = false;

  panelStyleMobile = {
    width: '100%',
    height: '77vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '83vh',
  };

  pages = [
    { page: 1, name: 'Depth Chart' },
    { page: 2, name: 'Team Stats' },
    { page: 3, name: 'Player Stats' },
    { page: 4, name: 'Goalie Stats' },
    { page: 5, name: 'Awards' },
  ];

  selectedEntity = this.pages[0];

  constructor(
    private displayFacade: DisplayFacade,
    private teamsSummaryFacade: TeamsSummaryFacade,
    private route: ActivatedRoute
  ) {
    this.userTeam$ = this.teamsSummaryFacade.userTeam$;
    this.isLoading$ = combineLatest([
      this.teamsSummaryFacade.teamRecordLoading$,
      this.teamsSummaryFacade.playerSalaryLoading$,
    ]).pipe(
      map(
        ([teamLoading, playerLoading]: [boolean, boolean]) =>
          teamLoading && playerLoading
      )
    );

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.route.params
      .pipe(
        untilDestroyed(this),
        map((params) =>
          this.teamsSummaryFacade.getUserByTeamId(params['teamId'])
        )
      )
      .subscribe();

      this.userTeam$
      .pipe(untilDestroyed(this))
      .subscribe((userTeam: TeamDto | undefined) => {
        if (userTeam) {
          this.teamsSummaryFacade.getUserTeamRecord(userTeam.id);
          this.teamsSummaryFacade.getPlayerSalaries(userTeam.shortname);
          this.teamsSummaryFacade.getGoalieSalaries(userTeam.shortname);
        }
      });
  }
}
