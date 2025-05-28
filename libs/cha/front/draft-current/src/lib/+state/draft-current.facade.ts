import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './draft-current.reducer';
import { DraftCurrentActions } from './draft-current.actions';
import { DraftCurrentSelectors } from './draft-current.selectors';
import { DraftTableDto, TeamDto } from '@cha/shared/entities';

@Injectable()
export class DraftCurrentFacade {
  isLoading$: Observable<boolean> = this.store.select(
    DraftCurrentSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    DraftCurrentSelectors.selectLoaded
  );

  draftTable$: Observable<DraftTableDto[]> = this.store.select(
    DraftCurrentSelectors.selectDraftTable
  );

  allTeams$: Observable<TeamDto[]> = this.store.select(
    DraftCurrentSelectors.selectAllTeams
  );

  constructor(private store: Store<State>) {}

  getDraftTable(season: number): void {
    this.store.dispatch(DraftCurrentActions.getDraftTable({ season }));
  }

  getNextDraftTable(season: number): void {
    this.store.dispatch(DraftCurrentActions.getNextDraftTable({ season }));
  }

  getAllTeams(): void {
    this.store.dispatch(DraftCurrentActions.getAllTeams());
  }
}
