import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-rules-equalization',
  templateUrl: './rules-equalization.component.html',
  styleUrls: ['./rules-equalization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesEqualizationComponent {
  background = 'assets/images/howe.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
