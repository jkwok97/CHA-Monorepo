import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { ChaLogoEnum } from '@cha/shared/entities';
import { first } from 'rxjs';

@Component({
  selector: 'cha-admin-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  ChaLogo = ChaLogoEnum;
  isMobile = false;
  panelStyleMobile = {
    width: '100%',
    height: '77vh',
    divHeight: '75vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '83vh',
    divHeight: '81vh',
  };

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }
}
