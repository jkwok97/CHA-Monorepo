import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import {
  GetTransactionDto,
  StatUserTeamRecordDto,
  TeamDto,
  UserDto,
} from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { HomeFacade } from '../../+state/home.facade';

@Component({
  selector: 'cha-front-home-dashboard-trades',
  templateUrl: './home-dashboard-trades.component.html',
  styleUrls: ['./home-dashboard-trades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDashboardTradesComponent implements OnInit {
  userTeam$: Observable<TeamDto | undefined>;
  user$: Observable<UserDto | null>;
  recentTrades$: Observable<GetTransactionDto[]> =
    this.homeFacade.recentTrades$;

  isMobile = false;

  constructor(
    private userTeamFacade: UserTeamFacade,
    private authFacade: AuthFacade,
    private displayFacade: DisplayFacade,
    private homeFacade: HomeFacade
  ) {
    this.userTeam$ = this.userTeamFacade.currentUserTeam$;
    this.user$ = this.authFacade.user$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    // TODO UPDATE EVERY SEASON
    this.homeFacade.getTransactions('25');
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
