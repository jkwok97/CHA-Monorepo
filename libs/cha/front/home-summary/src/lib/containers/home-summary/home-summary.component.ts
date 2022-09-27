import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade, LeagueDataFacade } from '@cha/domain/core';
import { combineLatest, first, map, Observable, of } from 'rxjs';
import { HomeSummaryFacade } from '../../+state/home-summary.facade';

@Component({
  selector: 'cha-front-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryComponent {
  isLoaded$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isOffSeason$: Observable<boolean>;

  isMobile = false;

  panelStyleMobile = {
    width: '100%',
    height: '77vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '83vh',
  };

  constructor(
    private displayFacade: DisplayFacade,
    private homeSummaryFacade: HomeSummaryFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isOffSeason$ = this.leagueDataFacade.isOffSeason$;
    
    this.isLoaded$ = combineLatest([
      this.homeSummaryFacade.goalieSalaryLoaded$,
      this.homeSummaryFacade.playerSalaryLoaded$,
      this.homeSummaryFacade.teamRecordLoaded$,
    ]).pipe(
      map(
        ([goalieLoaded, playerLoaded, recordLoaded]: [
          boolean,
          boolean,
          boolean
        ]) => goalieLoaded && playerLoaded && recordLoaded
      )
    );

    this.isLoading$ = combineLatest([
      this.homeSummaryFacade.goalieSalaryLoaded$,
      this.homeSummaryFacade.playerSalaryLoaded$,
      this.homeSummaryFacade.teamRecordLoaded$,
    ]).pipe(
      map(
        ([goalieLoaded, playerLoaded, recordLoaded]: [
          boolean,
          boolean,
          boolean
        ]) => !goalieLoaded && !playerLoaded && !recordLoaded
      )
    );

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }
}
