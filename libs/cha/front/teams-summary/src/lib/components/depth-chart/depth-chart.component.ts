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
  
  userTeam$: Observable<TeamDto | undefined>;
  leftWingers$!: Observable<SalariesAndRatingsDto[]>;
  centers$!: Observable<SalariesAndRatingsDto[]>;
  rightWingers$!: Observable<SalariesAndRatingsDto[]>;
  leftDefense$!: Observable<SalariesAndRatingsDto[]>;
  rightDefense$!: Observable<SalariesAndRatingsDto[]>;
  goalies$!: Observable<SalariesAndRatingsDto[]>;
  loadedSalaries$!: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private teamsSummaryFacade: TeamsSummaryFacade) {
    this.userTeam$ = this.teamsSummaryFacade.userTeam$;
    this.isLoading$ = this.teamsSummaryFacade.playerSalaryLoading$;
  }

  ngOnInit(): void {
    if (this.isOffSeason) {
      this.leftWingers$ = this.teamsSummaryFacade.leftWingersByNhlStats$;
      this.centers$ = this.teamsSummaryFacade.centersByNhlStats$;
      this.rightWingers$ = this.teamsSummaryFacade.rightWingersByNhlStats$;
      this.leftDefense$ = this.teamsSummaryFacade.leftDefensemanByNhlStats$;
      this.rightDefense$ = this.teamsSummaryFacade.rightDefensemanByNhlStats$;
      this.goalies$ = this.teamsSummaryFacade.goaliesByNhlStats$;
    } else {
      this.leftWingers$ = this.teamsSummaryFacade.leftWingersByRating$;
      this.centers$ = this.teamsSummaryFacade.centersByRating$;
      this.rightWingers$ = this.teamsSummaryFacade.rightWingersByRating$;
      this.leftDefense$ = this.teamsSummaryFacade.leftDefensemanByRating$;
      this.rightDefense$ = this.teamsSummaryFacade.rightDefensemanByRating$;
      this.goalies$ = this.teamsSummaryFacade.goaliesByRating$;
    }

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
