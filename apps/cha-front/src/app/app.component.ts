import { Component } from '@angular/core';
import {
  DisplayFacade,
  LeagueDataFacade,
  UserTeamFacade,
} from '@cha/domain/core';
import { Observable } from 'rxjs';
import { AuthFacade } from '@cha/domain/auth';

@Component({
  selector: 'cha-hockey-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // currentTeam$: Observable<TeamDto | undefined>;
  loggedIn$: Observable<boolean>;

  constructor(
    private userTeamFacade: UserTeamFacade,
    private authFacade: AuthFacade,
    private displayFacade: DisplayFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    // this.currentTeam$ = this.userTeamFacade.currentUserTeam$;
    this.loggedIn$ = this.authFacade.loggingInComplete$;

    this.displayFacade.get();
    this.leagueDataFacade.getLeagueData();
    this.leagueDataFacade.getLeagueTeams();
  }

  // ngOnInit(): void {
  // this.currentTeam$
  //   .pipe(untilDestroyed(this))
  //   .subscribe((currentTeam: TeamDto | undefined) => {
  //     if (currentTeam) {
  //       const linkElement = document.getElementById('theme-link');
  //
  //       this.setLink(linkElement, currentTeam.shortname);
  //     }
  //   });
  // }

  // setLink(linkElement: any, theme: string | undefined) {
  //   if (linkElement) {
  //     const id = linkElement.getAttribute('id');
  //     const cloneLinkElement = linkElement.cloneNode(true);
  //
  //     cloneLinkElement.setAttribute(
  //       'href',
  //       linkElement.getAttribute('href').replace('blade-light', <string>theme)
  //     );
  //     cloneLinkElement.setAttribute('id', id + '-clone');
  //
  //     linkElement?.parentNode?.insertBefore(
  //       cloneLinkElement,
  //       linkElement?.nextSibling
  //     );
  //
  //     cloneLinkElement.addEventListener('load', () => {
  //       linkElement.remove();
  //       cloneLinkElement.setAttribute('id', id);
  //     });
  //   }
  // }
}
