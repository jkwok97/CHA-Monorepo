import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TeamDto, SalariesAndRatingsDto } from '@cha/shared/entities';
import { Observable, combineLatest, map } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@Component({
  selector: 'cha-front-depth-chart',
  templateUrl: './depth-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartComponent implements OnInit {
  @Input() isOffSeason!: boolean;
  @Input() type!: 'future' | 'current';

  userTeam$: Observable<TeamDto | undefined>;
  leftWingers$!: Observable<SalariesAndRatingsDto[]>;
  centers$!: Observable<SalariesAndRatingsDto[]>;
  rightWingers$!: Observable<SalariesAndRatingsDto[]>;
  leftDefense$!: Observable<SalariesAndRatingsDto[]>;
  rightDefense$!: Observable<SalariesAndRatingsDto[]>;
  goalies$!: Observable<SalariesAndRatingsDto[]>;
  loadedSalaries$!: Observable<boolean>;
  isLoading$: Observable<boolean>;
  protectedPlayerCount$: Observable<number>;

  constructor(private teamsSummaryFacade: TeamsSummaryFacade) {
    this.userTeam$ = this.teamsSummaryFacade.userTeam$;
    this.isLoading$ = this.teamsSummaryFacade.playerSalaryLoading$;
    this.protectedPlayerCount$ =
      this.teamsSummaryFacade.totalProtectedPlayerCount$;
  }

  ngOnInit(): void {
    this.leftWingers$ =
      this.type === 'current'
        ? this.isOffSeason
          ? this.teamsSummaryFacade.leftWingersByNhlStats$
          : this.teamsSummaryFacade.leftWingersByRating$
        : this.teamsSummaryFacade.leftWingersByNextNhlStats$;
    this.centers$ =
      this.type === 'current'
        ? this.isOffSeason
          ? this.teamsSummaryFacade.centersByNhlStats$
          : this.teamsSummaryFacade.centersByRating$
        : this.teamsSummaryFacade.centersByNextNhlStats$;
    this.rightWingers$ =
      this.type === 'current'
        ? this.isOffSeason
          ? this.teamsSummaryFacade.rightWingersByNhlStats$
          : this.teamsSummaryFacade.rightWingersByRating$
        : this.teamsSummaryFacade.rightWingersByNextNhlStats$;
    this.leftDefense$ =
      this.type === 'current'
        ? this.isOffSeason
          ? this.teamsSummaryFacade.leftDefensemanByNhlStats$
          : this.teamsSummaryFacade.leftDefensemanByRating$
        : this.teamsSummaryFacade.leftDefensemanByNextNhlStats$;
    this.rightDefense$ =
      this.type === 'current'
        ? this.isOffSeason
          ? this.teamsSummaryFacade.rightDefensemanByNhlStats$
          : this.teamsSummaryFacade.rightDefensemanByRating$
        : this.teamsSummaryFacade.rightDefensemanByNextNhlStats$;
    this.goalies$ =
      this.type === 'current'
        ? this.isOffSeason
          ? this.teamsSummaryFacade.goaliesByNhlStats$
          : this.teamsSummaryFacade.goaliesByRating$
        : this.teamsSummaryFacade.goaliesByNextNhlStats$;

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
