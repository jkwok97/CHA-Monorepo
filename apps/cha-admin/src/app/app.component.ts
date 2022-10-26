import { Component } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';
import { DisplayFacade, LeagueDataFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-hockey-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  loggedIn$: Observable<boolean>;
  
  constructor(
    private displayFacade: DisplayFacade,
    private leagueDataFacade: LeagueDataFacade,
    private authFacade: AuthFacade,
  ) {
    this.loggedIn$ = this.authFacade.loggingInComplete$;
    this.displayFacade.get();
    this.leagueDataFacade.getLeagueData();
    this.leagueDataFacade.getLeagueTeams();
  }
}
