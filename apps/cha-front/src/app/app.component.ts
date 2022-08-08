import { Component, OnInit } from '@angular/core';
import { TeamDto } from '@cha/shared/entities';
import { UserTeamFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'cha-hockey-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  currentTeam$: Observable<TeamDto | undefined>;

  constructor(private userTeamFacade: UserTeamFacade) {
    this.currentTeam$ = this.userTeamFacade.currentUserTeam$;
  }

  ngOnInit(): void {
    this.currentTeam$
      .pipe(untilDestroyed(this))
      .subscribe((currentTeam: TeamDto | undefined) => {
        if (currentTeam) {
          const linkElement = document.getElementById('theme-link');
          this.setLink(linkElement, currentTeam?.shortname);
        }
      });
  }

  setLink(linkElement: any, theme: string | undefined) {
    if (linkElement) {
      const id = linkElement.getAttribute('id');
      const cloneLinkElement = linkElement.cloneNode(true);

      cloneLinkElement.setAttribute(
        'href',
        linkElement.getAttribute('href').replace('blade-light', <string>theme)
      );
      cloneLinkElement.setAttribute('id', id + '-clone');

      linkElement?.parentNode?.insertBefore(
        cloneLinkElement,
        linkElement?.nextSibling
      );

      cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();
        cloneLinkElement.setAttribute('id', id);
      });
    }
  }
}
