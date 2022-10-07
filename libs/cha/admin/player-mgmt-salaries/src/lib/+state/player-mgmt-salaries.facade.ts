import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './player-mgmt-salaries.reducer';
import { PlayerMgmtSalariesActions } from './player-mgmt-salaries.actions';
import { Observable } from 'rxjs';
import { PlayerMgmtSalariesSelectors } from './player-mgmt-salaries.selectors';
import { SalaryAllDto } from '@cha/shared/entities';

@Injectable()
export class PlayerMgmtSalariesFacade {
  isLoading$: Observable<boolean> = this.store.select(
    PlayerMgmtSalariesSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    PlayerMgmtSalariesSelectors.selectLoaded
  );

  isSaving$: Observable<boolean> = this.store.select(
    PlayerMgmtSalariesSelectors.selectSaving
  );

  isSaved$: Observable<boolean> = this.store.select(
    PlayerMgmtSalariesSelectors.selectSaved
  );

  salaries$: Observable<SalaryAllDto[]> = this.store.select(
    PlayerMgmtSalariesSelectors.selectSalaries
  );

  constructor(private store: Store<State>) {}

  getSalaries() {
    this.store.dispatch(PlayerMgmtSalariesActions.getSalaries());
  }

  editSalary(salary: SalaryAllDto) {
    this.store.dispatch(PlayerMgmtSalariesActions.editSalary({ salary }));
  }
}
