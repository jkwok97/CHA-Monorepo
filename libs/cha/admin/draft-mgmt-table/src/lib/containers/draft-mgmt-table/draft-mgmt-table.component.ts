import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { DraftTableDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { DraftMgmtTableFacade } from '../../+state/draft-mgmt-table.facade';

@Component({
  selector: 'cha-admin-draft-mgmt-table',
  templateUrl: './draft-mgmt-table.component.html',
  styleUrls: ['./draft-mgmt-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtTableComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  draftTableItems$: Observable<DraftTableDto[]>;

  isMobile!: boolean;

  constructor(
    private draftMgmtTableFacade: DraftMgmtTableFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.draftMgmtTableFacade.isLoaded$;
    this.isLoading$ = this.draftMgmtTableFacade.isLoading$;
    this.draftTableItems$ = this.draftMgmtTableFacade.draftTableItems$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
   
  }
}
