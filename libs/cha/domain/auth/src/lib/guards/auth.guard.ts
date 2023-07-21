import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthFacade } from '../+state/auth.facade';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
  constructor(private router: Router, private authFacade: AuthFacade) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authFacade.loggingInComplete$;
  }
}
