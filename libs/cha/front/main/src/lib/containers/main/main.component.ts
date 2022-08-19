import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { DisplayFacade } from '@cha/domain/core';
import { TeamDto, UserDto } from '@cha/shared/entities';
import { UserTeamFacade } from 'libs/cha/domain/core/src/lib/states/user-team/user-team.facade';
import { MenuItem } from 'primeng/api';
import { Observable, filter, first } from 'rxjs';
import { mainMenuItems } from './main-menu-items';

@Component({
  selector: 'cha-front-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  isLoading$: Observable<boolean>;
  currentTeam$: Observable<TeamDto | undefined>;
  currentUser$: Observable<UserDto | null>;
  isMobile$: Observable<boolean>;

  items: MenuItem[] = mainMenuItems;

  constructor(
    private authFacade: AuthFacade,
    private userTeamFacade: UserTeamFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoading$ = this.userTeamFacade.isLoading$;
    this.currentTeam$ = this.userTeamFacade.currentUserTeam$;
    this.currentUser$ = this.authFacade.user$;
    this.isMobile$ = this.displayFacade.isMobile$;
  }

  ngOnInit(): void {
    this.currentUser$
      .pipe(
        filter((user) => user !== null),
        first()
      )
      .subscribe((user: UserDto | null) => {
        if (user) {
          this.userTeamFacade.get(user.id);
        }
      });
  }
}
