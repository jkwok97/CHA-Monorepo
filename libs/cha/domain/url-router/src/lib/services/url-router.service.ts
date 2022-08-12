import { Injectable } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable()
export class UrlRouterService {
  private loading = false;

  constructor(private router: Router) {}

  public init() {
    this.router.events.pipe(untilDestroyed(this)).subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationStart: {
          if (!this.loading) {
            this.loading = true;
          }
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          if (this.loading) {
            this.loading = false;
            this.setItem('route', event.url);
            if (event.url === '/home/logout') {
              this.setItem('route', '');
            }
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
