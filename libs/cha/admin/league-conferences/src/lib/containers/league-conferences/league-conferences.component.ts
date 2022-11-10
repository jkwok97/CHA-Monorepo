import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { ConferenceDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { LeagueConferencesFacade } from '../../+state/league-conferences.facade';

@Component({
  selector: 'cha-admin-league-conferences',
  templateUrl: './league-conferences.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueConferencesComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  conferences$: Observable<ConferenceDto[]>;

  isMobile!: boolean;

  constructor(
    private leagueConferencesFacade: LeagueConferencesFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.leagueConferencesFacade.isLoaded$;
    this.isLoading$ = this.leagueConferencesFacade.isLoading$;
    this.conferences$ = this.leagueConferencesFacade.conferences$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.leagueConferencesFacade.getConferences();
  }
}
