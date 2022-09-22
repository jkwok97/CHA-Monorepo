import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { first } from 'rxjs';

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

  selectedEntity!: any;

  pages = [
    { index: 1, name: 'depth' },
    { index: 2, name: 'team' },
    { index: 3, name: 'players' },
    { index: 4, name: 'goalie' },
    { index: 5, name: 'awards' },
  ];

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }
}
