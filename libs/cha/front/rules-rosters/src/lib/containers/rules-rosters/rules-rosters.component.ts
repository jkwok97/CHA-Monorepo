import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-rules-rosters',
  templateUrl: './rules-rosters.component.html',
  styleUrls: ['./rules-rosters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesRostersComponent {
  background = 'assets/images/sidney-crosby-mario-lemieux.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
