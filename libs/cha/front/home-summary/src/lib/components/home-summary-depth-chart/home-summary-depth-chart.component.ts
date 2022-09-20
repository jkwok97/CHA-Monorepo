import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeagueDataFacade, UserTeamFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto, TeamDto } from '@cha/shared/entities';
import { combineLatest, map, Observable } from 'rxjs';
import { HomeSummaryFacade } from '../../+state/home-summary.facade';

@Component({
  selector: 'cha-front-home-summary-depth-chart',
  templateUrl: './home-summary-depth-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartComponent {
  userTeam$: Observable<TeamDto | undefined>;
  leftWingers$: Observable<SalariesAndRatingsDto[]>;
  centers$: Observable<SalariesAndRatingsDto[]>;
  rightWingers$: Observable<SalariesAndRatingsDto[]>;
  leftDefense$: Observable<SalariesAndRatingsDto[]>;
  rightDefense$: Observable<SalariesAndRatingsDto[]>;
  goalies$: Observable<SalariesAndRatingsDto[]>;
  loadedSalaries$: Observable<boolean>;
  isOffseason$: Observable<boolean>;

  constructor(
    private userTeamFacade: UserTeamFacade,
    private leagueDataFacade: LeagueDataFacade,
    private homeSummaryFacade: HomeSummaryFacade
  ) {
    this.userTeam$ = this.userTeamFacade.currentUserTeam$;
    this.leftWingers$ = this.homeSummaryFacade.leftWingers$;
    this.centers$ = this.homeSummaryFacade.centers$;
    this.rightWingers$ = this.homeSummaryFacade.rightWingers$;
    this.leftDefense$ = this.homeSummaryFacade.leftDefenseman$;
    this.rightDefense$ = this.homeSummaryFacade.rightDefenseman$;
    this.goalies$ = this.homeSummaryFacade.goalies$;
    this.isOffseason$ = this.leagueDataFacade.isOffSeason$;

    this.loadedSalaries$ = combineLatest([
      this.leftWingers$,
      this.centers$,
      this.rightWingers$,
      this.leftDefense$,
      this.rightDefense$,
      this.goalies$,
    ]).pipe(
      map(
        ([lw, c, rw, ld, rd, g]: [
          SalariesAndRatingsDto[],
          SalariesAndRatingsDto[],
          SalariesAndRatingsDto[],
          SalariesAndRatingsDto[],
          SalariesAndRatingsDto[],
          SalariesAndRatingsDto[]
        ]) =>
          lw.length > 0 &&
          c.length > 0 &&
          rw.length > 0 &&
          ld.length > 0 &&
          rd.length > 0 &&
          g.length > 0
      )
    );
  }
}
