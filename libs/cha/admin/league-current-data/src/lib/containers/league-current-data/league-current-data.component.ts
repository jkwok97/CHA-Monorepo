import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade, LeagueDataFacade } from '@cha/domain/core';
import { LeagueDataDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';

@Component({
  selector: 'cha-admin-league-current-data',
  templateUrl: './league-current-data.component.html',
  styleUrls: ['./league-current-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueCurrentDataComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  data$: Observable<LeagueDataDto>;

  isMobile!: boolean;

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.leagueDataFacade.isLoaded$;
    this.isLoading$ = this.leagueDataFacade.isLoading$;
    this.data$ = this.leagueDataFacade.leagueData$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }
}
