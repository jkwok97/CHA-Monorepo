import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-rules-lottery',
  templateUrl: './rules-lottery.component.html',
  styleUrls: ['./rules-lottery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesLotteryComponent {
  background = 'assets/images/gretzky.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
