import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-admin-main-transactions',
  templateUrl: './main-transactions.component.html',
  styleUrls: ['./main-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTransactionsComponent {
  panelStyleMobile = {
    width: '100%',
    height: '77vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '83vh',
  };

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
