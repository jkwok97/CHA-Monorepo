import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-rules-waivers',
  templateUrl: './rules-waivers.component.html',
  styleUrls: ['./rules-waivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesWaiversComponent {
  background = 'assets/images/lidstrom.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
