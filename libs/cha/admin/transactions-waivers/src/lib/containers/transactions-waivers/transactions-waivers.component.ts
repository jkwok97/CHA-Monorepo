import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { WaiversDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { TransactionsWaiversFacade } from '../../+state/transactions-waivers.facade';

@Component({
  selector: 'cha-admin-transactions-waivers',
  templateUrl: './transactions-waivers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsWaiversComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  waivers$: Observable<WaiversDto[]>;

  isMobile!: boolean;

  constructor(
    private transactionsWaiversFacade: TransactionsWaiversFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.transactionsWaiversFacade.isLoaded$;
    this.isLoading$ = this.transactionsWaiversFacade.isLoading$;
    this.waivers$ = this.transactionsWaiversFacade.waivers$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.transactionsWaiversFacade.getWaivers();
  }
}
