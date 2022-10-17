import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './player-mgmt-goalie-current.reducer';
import { PlayerMgmtGoalieCurrentActions } from './player-mgmt-goalie-current.actions';
import { Observable } from 'rxjs';
import { PlayerMgmtGoalieCurrentSelectors } from './player-mgmt-goalie-current.selectors';
import { StatGoalieAllDto } from '@cha/shared/entities';

@Injectable()
export class PlayerMgmtGoalieCurrentFacade {
  isLoading$: Observable<boolean> = this.store.select(
    PlayerMgmtGoalieCurrentSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    PlayerMgmtGoalieCurrentSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    PlayerMgmtGoalieCurrentSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    PlayerMgmtGoalieCurrentSelectors.selectSaved
  );

  goalies$: Observable<StatGoalieAllDto[]> = this.store.select(
    PlayerMgmtGoalieCurrentSelectors.selectGoalies
  );

  goalie$: Observable<StatGoalieAllDto | null> = this.store.select(
    PlayerMgmtGoalieCurrentSelectors.selectGoalie
  );

  goaliesOptions$: Observable<any[]> = this.store.select(
    PlayerMgmtGoalieCurrentSelectors.selectGoalieOptions
  );

  constructor(private store: Store<State>) {}

  getGoalies() {
    this.store.dispatch(PlayerMgmtGoalieCurrentActions.getGoalies());
  }

  editGoalie(goalie: StatGoalieAllDto) {
    this.store.dispatch(PlayerMgmtGoalieCurrentActions.editGoalie({ goalie }));
  }

  deleteGoalie(goalieId: number) {
    this.store.dispatch(
      PlayerMgmtGoalieCurrentActions.deleteGoalie({ goalieId })
    );
  }
}
