import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppRoute, RouterState } from '../models';
import { urlRouterActions } from './url-router.actions';

@Injectable()
export class RouterFacade {
  constructor(private store: Store<RouterState>) {}

  go(to: AppRoute) {
    this.store.dispatch(urlRouterActions.go(to));
  }

  goByUrl(to: AppRoute) {
    this.store.dispatch(urlRouterActions.go(to));
  }
}
