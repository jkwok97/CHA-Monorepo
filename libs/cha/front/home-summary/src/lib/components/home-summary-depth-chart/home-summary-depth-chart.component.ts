import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserTeamFacade } from '@cha/domain/core';
import { TeamDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-home-summary-depth-chart',
  templateUrl: './home-summary-depth-chart.component.html',
  styleUrls: ['./home-summary-depth-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartComponent implements OnInit {
  userTeam$: Observable<TeamDto | undefined>;

  constructor(private userTeamFacade: UserTeamFacade) {
    this.userTeam$ = this.userTeamFacade.currentUserTeam$;
  }

  ngOnInit(): void {}
}
