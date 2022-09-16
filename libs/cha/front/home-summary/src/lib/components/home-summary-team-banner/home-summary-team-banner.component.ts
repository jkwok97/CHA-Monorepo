import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import { TeamDto, UserDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'cha-front-home-summary-team-banner',
  templateUrl: './home-summary-team-banner.component.html',
  styleUrls: ['./home-summary-team-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryTeamBannerComponent implements OnInit {
  userTeam$: Observable<TeamDto | undefined>;
  user$: Observable<UserDto | null>;

  isMobile = false;

  constructor(
    private userTeamFacade: UserTeamFacade,
    private authFacade: AuthFacade,
    private displayFacade: DisplayFacade
  ) {
    this.userTeam$ = this.userTeamFacade.currentUserTeam$;
    this.user$ = this.authFacade.user$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {}

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
