import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import { TeamDto, UserDto } from '@cha/shared/entities';
import { MenuItem } from 'primeng/api';
import { Observable, filter, first } from 'rxjs';
import { mainMenuItems } from './main-menu-items';
import { menuItems } from './menu-items';
import { BladeNavListItemModel } from '@blade/angular/ui/multi-level-menu';

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
  menuItems: BladeNavListItemModel[] = menuItems;
  numberOfSubMenusToShow = 0;
  isMenuOpen = false;
  isMenuCollapsed = false;

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

  getWidth(): string {
    if (this.isMenuOpen) {
      if (this.numberOfSubMenusToShow > 0) {
        if (this.isMenuCollapsed) {
          return '30px';
        } else {
          return (265 + 35 * this.numberOfSubMenusToShow).toString() + 'px';
        }
      } else {
        if (this.isMenuCollapsed) {
          return '30px';
        } else {
          return '265px';
        }
      }
    } else {
      return '0px';
    }
  }

  onShowSubMenu(event: number): void {
    this.numberOfSubMenusToShow = event;
  }

  onIsMenuOpen(event: boolean): void {
    this.isMenuOpen = event;
  }

  onIsMenuCollapsed(event: boolean): void {
    this.isMenuCollapsed = event;
  }
}
