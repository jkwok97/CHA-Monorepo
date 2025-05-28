import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-main-league',
  templateUrl: './main-league.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLeagueComponent {
  panelStyleMobile = {
    width: '100%',
    height: '88vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '100',
  };

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
