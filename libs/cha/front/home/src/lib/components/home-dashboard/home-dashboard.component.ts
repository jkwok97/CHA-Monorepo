import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import { TeamDto, UserDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { HomeFacade } from '../../+state/home.facade';

@Component({
  selector: 'cha-front-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDashboardComponent {
  userTeam$: Observable<TeamDto | undefined>;
  user$: Observable<UserDto | null>;

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
}
