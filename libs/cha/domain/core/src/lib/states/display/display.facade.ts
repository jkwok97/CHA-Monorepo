import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DisplayActions } from './display.actions';
import { State } from './display.reducer';
import { DisplaySelectors } from './display.selectors';

@Injectable()
export class DisplayFacade {
  isMobile$: Observable<boolean> = this.store.select(
    DisplaySelectors.selectIsMobile
  );

  constructor(private store: Store<State>) {}

  get() {
    this.store.dispatch(DisplayActions.get());
  }
}
