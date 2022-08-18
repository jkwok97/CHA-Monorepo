import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-rules-winnings',
  templateUrl: './rules-winnings.component.html',
  styleUrls: ['./rules-winnings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesWinningsComponent {
  background = 'assets/images/oilers-old.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
