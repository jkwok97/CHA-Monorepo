import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AwardsFacade, DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-main-awards',
  templateUrl: './main-awards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAwardsComponent {
  panelStyleMobile = {
    width: '100%',
    height: '88vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '90vh',
  };

  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  isMobile$: Observable<boolean>;

  constructor(
    private awardsFacade: AwardsFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoading$ = this.awardsFacade.isLoading$;
    this.isLoaded$ = this.awardsFacade.isLoaded$;
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
