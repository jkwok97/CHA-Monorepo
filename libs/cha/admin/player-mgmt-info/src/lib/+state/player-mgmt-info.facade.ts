import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './player-mgmt-info.reducer';
import { PlayerMgmtInfoActions } from './player-mgmt-info.actions';
import { Observable } from 'rxjs';
import { PlayerMgmtInfoSelectors } from './player-mgmt-info.selectors';
import { PlayerCreateDto, PlayerDto, SalaryAllDto } from '@cha/shared/entities';

@Injectable()
export class PlayerMgmtInfoFacade {
  isLoading$: Observable<boolean> = this.store.select(
    PlayerMgmtInfoSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    PlayerMgmtInfoSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    PlayerMgmtInfoSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    PlayerMgmtInfoSelectors.selectSaved
  );

  players$: Observable<PlayerDto[]> = this.store.select(
    PlayerMgmtInfoSelectors.selectPlayers
  );

  player$: Observable<PlayerDto | null> = this.store.select(
    PlayerMgmtInfoSelectors.selectPlayer
  );

  constructor(private store: Store<State>) {}

  getPlayers() {
    this.store.dispatch(PlayerMgmtInfoActions.getPlayers());
  }

  addPlayer(player: PlayerCreateDto) {
    this.store.dispatch(PlayerMgmtInfoActions.addPlayer({ player }));
  }

  editPlayer(player: PlayerDto) {
    this.store.dispatch(PlayerMgmtInfoActions.editPlayer({ player }));
  }

  deletePlayer(playerId: number) {
    this.store.dispatch(PlayerMgmtInfoActions.deletePlayer({ playerId }));
  }

  addSalary(salary: SalaryAllDto) {
    this.store.dispatch(PlayerMgmtInfoActions.addSalary({ salary }));
  }
}
