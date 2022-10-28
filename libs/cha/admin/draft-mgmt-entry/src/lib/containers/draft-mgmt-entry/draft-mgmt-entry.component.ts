import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { DraftPickDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { DraftMgmtEntryFacade } from '../../+state/draft-mgmt-entry.facade';

@Component({
  selector: 'cha-admin-draft-mgmt-entry',
  templateUrl: './draft-mgmt-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtEntryComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  picks$: Observable<DraftPickDto[]>;

  isMobile!: boolean;

  constructor(
    private draftMgmtEntryFacade: DraftMgmtEntryFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.draftMgmtEntryFacade.isLoaded$;
    this.isLoading$ = this.draftMgmtEntryFacade.isLoading$;
    this.picks$ = this.draftMgmtEntryFacade.picks$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
      this.draftMgmtEntryFacade.getPicks();
  }
}
