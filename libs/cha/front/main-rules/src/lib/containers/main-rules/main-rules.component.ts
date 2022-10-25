import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-main-rules',
  templateUrl: './main-rules.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainRulesComponent {
  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }

  panelStyleMobile = {
    width: '100%',
    height: '85vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '90vh',
  };
}
