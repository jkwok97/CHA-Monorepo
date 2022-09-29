import { Component } from '@angular/core';
import { DisplayFacade, LeagueDataFacade } from '@cha/domain/core';

@Component({
  selector: 'cha-hockey-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private displayFacade: DisplayFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.displayFacade.get();
    this.leagueDataFacade.getLeagueData();
    this.leagueDataFacade.getLeagueTeams();
  }
}
