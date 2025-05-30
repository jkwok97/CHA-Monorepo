import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthFacade } from '@cha/domain/auth';
import { UserDto } from '@cha/shared/entities';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { finalize, first, tap } from 'rxjs/operators';

@Injectable()
export class MainResolver {
  loading = false;

  constructor(
    private authFacade: AuthFacade,
    private router: Router,
    private messageService: MessageService
  ) {}

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
          if (user && !user.isadmin) {
            this.router.navigate([`/login`]);
            this.messageService.add({
              severity: 'error',
              summary: 'You Are Not Authorized',
            });
          } else {
            const item = localStorage.getItem('route');

            if (item) {
              const route = JSON.parse(item);

              if (route === '/' || route === '/login') {
                this.router.navigate(['/home']);
              } else {
                const route = JSON.parse(item);
                this.router.navigateByUrl(`${route}`);
              }
            } else {
              this.router.navigate(['/home']);
            }
          }
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
