import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-rules-egr',
  templateUrl: './rules-egr.component.html',
  styleUrls: ['./rules-egr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesEgrComponent {
  background = 'assets/images/brodeur.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
