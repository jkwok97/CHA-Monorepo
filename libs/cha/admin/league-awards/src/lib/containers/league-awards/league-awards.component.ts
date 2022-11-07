import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { AwardDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { LeagueAwardsFacade } from '../../+state/league-awards.facade';

@Component({
  selector: 'cha-admin-league-awards',
  templateUrl: './league-awards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueAwardsComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  awards$: Observable<AwardDto[]>;

  isMobile!: boolean;

  constructor(
    private leagueAwardsFacade: LeagueAwardsFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.leagueAwardsFacade.isLoaded$;
    this.isLoading$ = this.leagueAwardsFacade.isLoading$;
    this.awards$ = this.leagueAwardsFacade.awards$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.leagueAwardsFacade.getAwards();
  }
}
