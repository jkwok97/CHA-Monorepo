import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { AuthFacade } from '../+state/auth.facade';
import { State } from '../+state/auth.reducer';

@Injectable()
export class SharedAuthResolver implements Resolve<any> {
  loading = false;

  constructor(private authFacade: AuthFacade, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.authFacade.state$.pipe(
      tap((authState: State) => {
        if (!this.loading && !authState.isAuthenticated) {
          this.authFacade.init();
          this.loading = true;
        }
      }),
      filter((authState: State) => authState.isAuthenticated),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
