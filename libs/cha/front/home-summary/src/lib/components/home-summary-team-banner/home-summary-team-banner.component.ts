import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import { StatUserTeamRecordDto, TeamDto, UserDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { HomeSummaryFacade } from '../../+state/home-summary.facade';

@Component({
  selector: 'cha-front-home-summary-team-banner',
  templateUrl: './home-summary-team-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryTeamBannerComponent implements OnInit {
  userTeam$: Observable<TeamDto | undefined>;
  user$: Observable<UserDto | null>;
  isTeamRecordLoading$: Observable<boolean>;
  isTeamRecordLoaded$: Observable<boolean>;
  teamRecord$: Observable<StatUserTeamRecordDto | null>;
  totalSalary$: Observable<number>;
  nextTotalSalary$: Observable<number>;
  totalPlayers$: Observable<number>;

  isMobile = false;

  constructor(
    private userTeamFacade: UserTeamFacade,
    private authFacade: AuthFacade,
    private displayFacade: DisplayFacade,
    private homeSummaryFacade: HomeSummaryFacade
  ) {
    this.userTeam$ = this.userTeamFacade.currentUserTeam$;
    this.user$ = this.authFacade.user$;
    this.isTeamRecordLoaded$ = this.homeSummaryFacade.teamRecordLoaded$;
    this.isTeamRecordLoading$ = this.homeSummaryFacade.teamRecordLoading$;
    this.teamRecord$ = this.homeSummaryFacade.teamRecord$;
    this.totalSalary$ = this.homeSummaryFacade.totalTeamSalary$;
    this.nextTotalSalary$ = this.homeSummaryFacade.totalNextTeamSalary$;
    this.totalPlayers$ = this.homeSummaryFacade.totalPlayerCount$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.userTeam$.pipe(first()).subscribe((userTeam: TeamDto | undefined) => {
      if (userTeam) {
        this.homeSummaryFacade.getUserTeamRecord(userTeam.id);
        this.homeSummaryFacade.getPlayerSalaries(userTeam.shortname);
        this.homeSummaryFacade.getGoalieSalaries(userTeam.shortname);
      }
    });
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
