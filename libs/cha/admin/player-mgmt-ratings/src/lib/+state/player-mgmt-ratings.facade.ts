import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './player-mgmt-ratings.reducer';
import { PlayerMgmtRatingsActions } from './player-mgmt-ratings.actions';
import { Observable } from 'rxjs';
import { PlayerMgmtRatingsSelectors } from './player-mgmt-ratings.selectors';
import { GoalieRatingDto, PlayerRatingDto } from '@cha/shared/entities';

@Injectable()
export class PlayerMgmtRatingsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    PlayerMgmtRatingsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    PlayerMgmtRatingsSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    PlayerMgmtRatingsSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    PlayerMgmtRatingsSelectors.selectSaved
  );

  players$: Observable<PlayerRatingDto[]> = this.store.select(
    PlayerMgmtRatingsSelectors.selectPlayers
  );

  player$: Observable<PlayerRatingDto | null> = this.store.select(
    PlayerMgmtRatingsSelectors.selectPlayer
  );

  goalies$: Observable<GoalieRatingDto[]> = this.store.select(
    PlayerMgmtRatingsSelectors.selectGoalies
  );

  goalie$: Observable<GoalieRatingDto | null> = this.store.select(
    PlayerMgmtRatingsSelectors.selectPlayer
  );

  constructor(private store: Store<State>) {}

  getPlayers() {
    this.store.dispatch(PlayerMgmtRatingsActions.getPlayers());
  }

  editPlayer(player: PlayerRatingDto) {
    this.store.dispatch(PlayerMgmtRatingsActions.editPlayer({ player }));
  }

  getGoalies() {
    this.store.dispatch(PlayerMgmtRatingsActions.getGoalies());
  }

  editGoalie(goalie: GoalieRatingDto) {
    this.store.dispatch(PlayerMgmtRatingsActions.editGoalie({ goalie }));
  }
}
