import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { LeagueDataFacade, UserTeamFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto, TeamDto } from '@cha/shared/entities';
import { combineLatest, map, Observable } from 'rxjs';
import { HomeSummaryFacade } from '../../+state/home-summary.facade';

@Component({
  selector: 'cha-front-home-summary-depth-chart',
  templateUrl: './home-summary-depth-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartComponent implements OnInit {
  @Input() isOffSeason!: boolean;

  userTeam$: Observable<TeamDto | undefined>;
  leftWingers$!: Observable<SalariesAndRatingsDto[]>;
  centers$!: Observable<SalariesAndRatingsDto[]>;
  rightWingers$!: Observable<SalariesAndRatingsDto[]>;
  leftDefense$!: Observable<SalariesAndRatingsDto[]>;
  rightDefense$!: Observable<SalariesAndRatingsDto[]>;
  goalies$!: Observable<SalariesAndRatingsDto[]>;
  loadedSalaries$!: Observable<boolean>;
  protectedPlayerCount$: Observable<number>;

  constructor(
    private userTeamFacade: UserTeamFacade,
    private homeSummaryFacade: HomeSummaryFacade
  ) {
    this.userTeam$ = this.userTeamFacade.currentUserTeam$;
    this.protectedPlayerCount$ =
      this.homeSummaryFacade.totalProtectedPlayerCount$;
  }

  ngOnInit(): void {
    this.leftWingers$ = this.isOffSeason
      ? this.homeSummaryFacade.leftWingersByNhlStats$
      : this.homeSummaryFacade.leftWingersByRating$;
    this.centers$ = this.isOffSeason
      ? this.homeSummaryFacade.centersByNhlStats$
      : this.homeSummaryFacade.centersByRating$;
    this.rightWingers$ = this.isOffSeason
      ? this.homeSummaryFacade.rightWingersByNhlStats$
      : this.homeSummaryFacade.rightWingersByRating$;
    this.leftDefense$ = this.isOffSeason
      ? this.homeSummaryFacade.leftDefensemanByNhlStats$
      : this.homeSummaryFacade.leftDefensemanByRating$;
    this.rightDefense$ = this.isOffSeason
      ? this.homeSummaryFacade.rightDefensemanByNhlStats$
      : this.homeSummaryFacade.rightDefensemanByRating$;
    this.goalies$ = this.isOffSeason
      ? this.homeSummaryFacade.goaliesByNhlStats$
      : this.homeSummaryFacade.goaliesByRating$;

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
