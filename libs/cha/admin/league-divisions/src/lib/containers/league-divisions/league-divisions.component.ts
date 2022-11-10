import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { DivisionDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { LeagueDivisionsFacade } from '../../+state/league-divisions.facade';

@Component({
  selector: 'cha-admin-league-divisions',
  templateUrl: './league-divisions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  divisions$: Observable<DivisionDto[]>;

  isMobile!: boolean;

  constructor(
    private leagueDivisionsFacade: LeagueDivisionsFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.leagueDivisionsFacade.isLoaded$;
    this.isLoading$ = this.leagueDivisionsFacade.isLoading$;
    this.divisions$ = this.leagueDivisionsFacade.divisions$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.leagueDivisionsFacade.getDivisions();
  }
}
