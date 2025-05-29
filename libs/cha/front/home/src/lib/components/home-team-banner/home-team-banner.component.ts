import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import { StatUserTeamRecordDto, TeamDto, UserDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { HomeFacade } from '../../+state/home.facade';

@Component({
  selector: 'cha-front-home-team-banner',
  templateUrl: './home-team-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTeamBannerComponent implements OnInit {
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
    private homeFacade: HomeFacade
  ) {
    this.userTeam$ = this.userTeamFacade.currentUserTeam$;
    this.user$ = this.authFacade.user$;
    this.isTeamRecordLoaded$ = this.homeFacade.teamRecordLoaded$;
    this.isTeamRecordLoading$ = this.homeFacade.teamRecordLoading$;
    this.teamRecord$ = this.homeFacade.teamRecord$;
    this.totalSalary$ = this.homeFacade.totalTeamSalary$;
    this.nextTotalSalary$ = this.homeFacade.totalNextTeamSalary$;
    this.totalPlayers$ = this.homeFacade.totalPlayerCount$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.userTeam$.pipe(first()).subscribe((userTeam: TeamDto | undefined) => {
      if (userTeam) {
        this.homeFacade.getUserTeamRecord(userTeam.id);
        this.homeFacade.getPlayerSalaries(userTeam.shortname);
        this.homeFacade.getGoalieSalaries(userTeam.shortname);
      }
    });
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
