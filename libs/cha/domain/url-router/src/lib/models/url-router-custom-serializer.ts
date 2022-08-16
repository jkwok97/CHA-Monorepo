import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './url-router.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UrlRouterCustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl>
{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
