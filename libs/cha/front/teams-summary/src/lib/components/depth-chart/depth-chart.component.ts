import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { TeamDto, SalariesAndRatingsDto } from '@cha/shared/entities';
import { Observable, combineLatest, map, delay } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@Component({
  selector: 'cha-front-depth-chart',
  templateUrl: './depth-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartComponent {
  userTeam$: Observable<TeamDto | undefined>;
  leftWingers$: Observable<SalariesAndRatingsDto[]>;
  centers$: Observable<SalariesAndRatingsDto[]>;
  rightWingers$: Observable<SalariesAndRatingsDto[]>;
  leftDefense$: Observable<SalariesAndRatingsDto[]>;
  rightDefense$: Observable<SalariesAndRatingsDto[]>;
  goalies$: Observable<SalariesAndRatingsDto[]>;
  loadedSalaries$: Observable<boolean>;
  isOffseason$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private teamsSummaryFacade: TeamsSummaryFacade
  ) {
    this.userTeam$ = this.teamsSummaryFacade.userTeam$;
    this.leftWingers$ = this.teamsSummaryFacade.leftWingers$;
    this.centers$ = this.teamsSummaryFacade.centers$;
    this.rightWingers$ = this.teamsSummaryFacade.rightWingers$;
    this.leftDefense$ = this.teamsSummaryFacade.leftDefenseman$;
    this.rightDefense$ = this.teamsSummaryFacade.rightDefenseman$;
    this.goalies$ = this.teamsSummaryFacade.goalies$;
    this.isOffseason$ = this.leagueDataFacade.isOffSeason$;
    this.isLoading$ = this.teamsSummaryFacade.playerSalaryLoading$;

    this.loadedSalaries$ = combineLatest([
      this.leftWingers$,
      this.centers$,
      this.rightWingers$,
      this.leftDefense$,
      this.rightDefense$,
      this.goalies$,
    ]).pipe(
      delay(100),
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
