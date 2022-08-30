import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './stats-team-all.reducer';
import { StatsTeamAllActions } from './stats-team-all.actions';
import { Observable } from 'rxjs';
import { StatsTeamAllSelectors } from './stats-team-all.selectors';
import { StatTeamAllDto } from '@cha/shared/entities';

@Injectable()
export class StatsTeamAllFacade {
  isLoading$: Observable<boolean> = this.store.select(
    StatsTeamAllSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    StatsTeamAllSelectors.selectLoaded
  );

  allStats$: Observable<StatTeamAllDto[]> = this.store.select(
    StatsTeamAllSelectors.selectAll
  );

  westernStats$: Observable<StatTeamAllDto[]> = this.store.select(
    StatsTeamAllSelectors.selectWesternTeams
  );

  easternStats$: Observable<StatTeamAllDto[]> = this.store.select(
    StatsTeamAllSelectors.selectEasternTeams
  );

  northWesternStats$: Observable<StatTeamAllDto[]> = this.store.select(
    StatsTeamAllSelectors.selectNorthWesternTeams
  );

  northEasternStats$: Observable<StatTeamAllDto[]> = this.store.select(
    StatsTeamAllSelectors.selectNorthEasternTeams
  );

  southWesternStats$: Observable<StatTeamAllDto[]> = this.store.select(
    StatsTeamAllSelectors.selectSouthWesternTeams
  );

  southEasternStats$: Observable<StatTeamAllDto[]> = this.store.select(
    StatsTeamAllSelectors.selectSouthEasternTeams
  );

  constructor(private store: Store<State>) {}

  getAllTeamStats(season: string) {
    this.store.dispatch(StatsTeamAllActions.getAll({ season }));
  }
}
