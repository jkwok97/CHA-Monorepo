import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { first } from 'rxjs';

@Component({
  selector: 'cha-admin-transactions-trades',
  templateUrl: './transactions-trades.component.html',
  styleUrls: ['./transactions-trades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTradesComponent {
  isMobile!: boolean;

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }
}
