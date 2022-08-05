import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthFacade } from '@cha/domain/auth';
import { UserDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { finalize, first, tap } from 'rxjs/operators';

@Injectable()
export class MainResolver implements Resolve<boolean> {
  loading = false;

  constructor(private authFacade: AuthFacade, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.authFacade.user$.pipe(
      tap((user: UserDto | null) => {
        if (!this.loading) {
          this.loading = true;
        }

        if (!user?.isactive) {
          this.router.navigate([`/login`]);
        } else {
          const item = localStorage.getItem('route');

          if (item) {
            const route = JSON.parse(item);

            if (route === '/') {
              this.router.navigate(['/home']);
            } else {
              const route = JSON.parse(item);
              this.router.navigateByUrl(`${route}`);
            }
          } else {
            this.router.navigate(['/home']);
          }
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
