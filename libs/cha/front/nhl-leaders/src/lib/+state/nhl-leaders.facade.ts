import { Injectable } from '@angular/core';
import {
  NhlLeadersDto,
  NhlPlayerDto,
  NhlGoalieDto,
} from '@cha/shared/entities';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NhlLeadersActions } from './nhl-leaders.actions';
import { State } from './nhl-leaders.reducer';
import { NhlLeadersSelectors } from './nhl-leaders.selectors';

@Injectable()
export class NhlLeadersFacade {
  isLoading$: Observable<boolean> = this.store.select(
    NhlLeadersSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    NhlLeadersSelectors.selectLoaded
  );

  leaders$: Observable<NhlLeadersDto> = this.store.select(
    NhlLeadersSelectors.selectLeaders
  );

  goals$: Observable<NhlPlayerDto[]> = this.store.select(
    NhlLeadersSelectors.selectGoalsLeaders
  );

  assists$: Observable<NhlPlayerDto[]> = this.store.select(
    NhlLeadersSelectors.selectAssistsLeaders
  );

  points$: Observable<NhlPlayerDto[]> = this.store.select(
    NhlLeadersSelectors.selectPointsLeaders
  );

  rookieGoals$: Observable<NhlPlayerDto[]> = this.store.select(
    NhlLeadersSelectors.selectRookieGoalsLeaders
  );

  rookieAssists$: Observable<NhlPlayerDto[]> = this.store.select(
    NhlLeadersSelectors.selectRookieAssistsLeaders
  );

  rookiePoints$: Observable<NhlPlayerDto[]> = this.store.select(
    NhlLeadersSelectors.selectRookiePointsLeaders
  );

  defenseGoals$: Observable<NhlPlayerDto[]> = this.store.select(
    NhlLeadersSelectors.selectDefenseGoalsLeaders
  );

  defenseAssists$: Observable<NhlPlayerDto[]> = this.store.select(
    NhlLeadersSelectors.selectDefenseAssistsLeaders
  );

  defensePoints$: Observable<NhlPlayerDto[]> = this.store.select(
    NhlLeadersSelectors.selectDefensePointsLeaders
  );

  gaa$: Observable<NhlGoalieDto[]> = this.store.select(
    NhlLeadersSelectors.selectGaaLeaders
  );

  savePct$: Observable<NhlGoalieDto[]> = this.store.select(
    NhlLeadersSelectors.selectSavePctLeaders
  );

  shutouts$: Observable<NhlGoalieDto[]> = this.store.select(
    NhlLeadersSelectors.selectShutoutLeaders
  );

  constructor(private store: Store<State>) {}

  getLeaders() {
    this.store.dispatch(NhlLeadersActions.getLeaders());
  }
}
