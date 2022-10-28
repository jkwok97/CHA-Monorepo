import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { Observable, first } from 'rxjs';

@Component({
  selector: 'cha-admin-transaction-trades',
  templateUrl: './transaction-trades.component.html',
  styleUrls: ['./transaction-trades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionTradesComponent {
  // isLoading$: Observable<boolean>;
  // isLoaded$: Observable<boolean>;
  // picks$: Observable<DraftPickDto[]>;

  isMobile!: boolean;

  constructor(
    // private draftMgmtEntryFacade: DraftMgmtEntryFacade,
    private displayFacade: DisplayFacade
  ) {
    // this.isLoaded$ = this.draftMgmtEntryFacade.isLoaded$;
    // this.isLoading$ = this.draftMgmtEntryFacade.isLoading$;
    // this.picks$ = this.draftMgmtEntryFacade.picks$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    // this.draftMgmtEntryFacade.getPicks();
    // this.draftMgmtEntryFacade.getPlayers();
    // this.draftMgmtEntryFacade.getTeams();
  }
}
