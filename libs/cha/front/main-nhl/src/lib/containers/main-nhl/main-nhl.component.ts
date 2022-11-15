import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-main-nhl',
  templateUrl: './main-nhl.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNhlComponent  {
  panelStyleMobile = {
    width: '100%',
    height: '88vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '90vh',
  };

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
