import { Injectable } from '@angular/core';
import {
  PlayoffStandingsModel,
  StatTeamPlayoffsDto,
} from '@cha/shared/entities';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GamesPlayoffsActions } from './games-playoffs.actions';
import { State } from './games-playoffs.reducer';
import { GamesPlayoffsSelectors } from './games-playoffs.selectors';

@Injectable()
export class GamesPlayoffsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    GamesPlayoffsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    GamesPlayoffsSelectors.selectLoaded
  );

  playoffStandings$: Observable<PlayoffStandingsModel> = this.store.select(
    GamesPlayoffsSelectors.selectPlayoffStandings
  );

  westTeams$: Observable<StatTeamPlayoffsDto[]> = this.store.select(
    GamesPlayoffsSelectors.selectWestTeams
  );

  eastTeams$: Observable<StatTeamPlayoffsDto[]> = this.store.select(
    GamesPlayoffsSelectors.selectEastTeams
  );

  boxScore$: Observable<File | null> = this.store.select(
    GamesPlayoffsSelectors.selectBoxScore
  );

  gameLoading$: Observable<boolean> = this.store.select(
    GamesPlayoffsSelectors.selectGameLoading
  );

  constructor(private store: Store<State>) {}

  getPlayoffStandings() {
    this.store.dispatch(GamesPlayoffsActions.getStandings());
  }

  getBoxScore(gameId: string) {
    this.store.dispatch(GamesPlayoffsActions.getBoxScore({ gameId }));
  }

  resetBoxScore() {
    this.store.dispatch(GamesPlayoffsActions.resetBoxScore());
  }
}
