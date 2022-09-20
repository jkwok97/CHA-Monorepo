import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserTeamFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto, TeamDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { HomeSummaryFacade } from '../../+state/home-summary.facade';

@Component({
  selector: 'cha-front-home-summary-depth-chart',
  templateUrl: './home-summary-depth-chart.component.html',
  styleUrls: ['./home-summary-depth-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartComponent implements OnInit {
  userTeam$: Observable<TeamDto | undefined>;
  leftWingers$: Observable<SalariesAndRatingsDto[]>;
  centers$: Observable<SalariesAndRatingsDto[]>;
  rightWingers$: Observable<SalariesAndRatingsDto[]>;
  leftDefense$: Observable<SalariesAndRatingsDto[]>;
  rightDefense$: Observable<SalariesAndRatingsDto[]>;
  goalies$: Observable<SalariesAndRatingsDto[]>;

  constructor(
    private userTeamFacade: UserTeamFacade,
    private homeSummaryFacade: HomeSummaryFacade
  ) {
    this.userTeam$ = this.userTeamFacade.currentUserTeam$;
    this.leftWingers$ = this.homeSummaryFacade.leftWingers$;
    this.centers$ = this.homeSummaryFacade.centers$;
    this.rightWingers$ = this.homeSummaryFacade.rightWingers$;
    this.leftDefense$ = this.homeSummaryFacade.leftDefenseman$;
    this.rightDefense$ = this.homeSummaryFacade.rightDefenseman$;
    this.goalies$ = this.homeSummaryFacade.goalies$;
  }

  ngOnInit(): void {
    this.leftWingers$.subscribe((v) => {
      console.log('LW:', v);
    });
    // this.centers$.subscribe((v) => {
    //   console.log('C:', v);
    // });
    // this.rightWingers$.subscribe((v) => {
    //   console.log('RW:', v);
    // });
    // this.leftDefense$.subscribe((v) => {
    //   console.log('LD:', v);
    // });
    // this.rightDefense$.subscribe((v) => {
    //   console.log('RD:', v);
    // });
  }
}
