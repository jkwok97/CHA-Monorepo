import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-admin-league-divisions',
  templateUrl: './league-divisions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsComponent {
  // isLoading$: Observable<boolean>;
  // isLoaded$: Observable<boolean>;
  // awards$: Observable<AwardDto[]>;

  // isMobile!: boolean;

  // constructor(
  //   private leagueAwardsFacade: LeagueAwardsFacade,
  //   private displayFacade: DisplayFacade
  // ) {
  //   this.isLoaded$ = this.leagueAwardsFacade.isLoaded$;
  //   this.isLoading$ = this.leagueAwardsFacade.isLoading$;
  //   this.awards$ = this.leagueAwardsFacade.awards$;

  //   this.displayFacade.isMobile$
  //     .pipe(first())
  //     .subscribe((isMobile: boolean) => {
  //       this.isMobile = isMobile;
  //     });

  //   this.leagueAwardsFacade.getAwards();
  // }
}
