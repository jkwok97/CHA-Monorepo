import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-rules-player-protection',
  templateUrl: './rules-player-protection.component.html',
  styleUrls: ['./rules-player-protection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesPlayerProtectionComponent {
  background = 'assets/images/bure.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
