import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './league-data.reducer';
import { LeagueDataActions } from './league-data.actions';
import { LeagueDataSelectors } from './league-data.selectors';
import { LeagueDataDto, TeamDto } from '@cha/shared/entities';

@Injectable()
export class LeagueDataFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueDataSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueDataSelectors.selectLoaded
  );

  leagueData$: Observable<LeagueDataDto> = this.store.select(
    LeagueDataSelectors.selectLeagueData
  );

  leagueTeams$: Observable<TeamDto[]> = this.store.select(
    LeagueDataSelectors.selectTeams
  );

  constructor(private store: Store<State>) {}

  getLeagueData() {
    this.store.dispatch(LeagueDataActions.getLeagueData());
  }

  getLeagueTeams() {
    this.store.dispatch(LeagueDataActions.getTeams());
  }
}
