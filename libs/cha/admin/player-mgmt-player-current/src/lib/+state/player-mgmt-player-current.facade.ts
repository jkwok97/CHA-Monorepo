import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './player-mgmt-player-current.reducer';
import { PlayerMgmtPlayerCurrentActions } from './player-mgmt-player-current.actions';
import { Observable } from 'rxjs';
import { PlayerMgmtPlayerCurrentSelectors } from './player-mgmt-player-current.selectors';
import { CreateStatPlayerAllDto, StatPlayerAllDto } from '@cha/shared/entities';

@Injectable()
export class PlayerMgmtPlayerCurrentFacade {
  isLoading$: Observable<boolean> = this.store.select(
    PlayerMgmtPlayerCurrentSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    PlayerMgmtPlayerCurrentSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    PlayerMgmtPlayerCurrentSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    PlayerMgmtPlayerCurrentSelectors.selectSaved
  );

  players$: Observable<StatPlayerAllDto[]> = this.store.select(
    PlayerMgmtPlayerCurrentSelectors.selectPlayers
  );

  player$: Observable<StatPlayerAllDto | null> = this.store.select(
    PlayerMgmtPlayerCurrentSelectors.selectPlayer
  );

  playersOptions$: Observable<any[]> = this.store.select(
    PlayerMgmtPlayerCurrentSelectors.selectPlayerOptions
  );

  constructor(private store: Store<State>) {}

  getPlayers() {
    this.store.dispatch(PlayerMgmtPlayerCurrentActions.getPlayers());
  }

  editPlayer(player: StatPlayerAllDto) {
    this.store.dispatch(PlayerMgmtPlayerCurrentActions.editPlayer({ player }));
  }

  deletePlayer(playerId: number) {
    this.store.dispatch(
      PlayerMgmtPlayerCurrentActions.deletePlayer({ playerId })
    );
  }
}
