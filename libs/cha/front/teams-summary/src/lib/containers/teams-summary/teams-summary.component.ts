import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayFacade } from '@cha/domain/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { first, map } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-teams-summary',
  templateUrl: './teams-summary.component.html',
  styleUrls: ['./teams-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryComponent {
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
    { page: 1, name: 'depth' },
    { page: 2, name: 'team' },
    { page: 3, name: 'players' },
    { page: 4, name: 'goalie' },
    { page: 5, name: 'awards' },
  ];

  selectedEntity = this.pages[0];

  constructor(
    private displayFacade: DisplayFacade,
    private teamsSummaryFacade: TeamsSummaryFacade,
    private route: ActivatedRoute
  ) {
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
  }
}
