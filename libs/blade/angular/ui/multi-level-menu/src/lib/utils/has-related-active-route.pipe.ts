import { inject, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, of, startWith } from 'rxjs';

@Pipe({
  name: 'hasRelatedActiveRoute'
})
export class HasRelatedActiveRoutePipe implements PipeTransform {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private routeMatchOptions: IsActiveMatchOptions = {
    paths: 'subset',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored'
  }

  transform(routes: string[] | undefined): Observable<boolean> {
    if (!routes) return of(false);

    return this.router.events.pipe(
      // Filter to NavigationEnd events to check after navigation completes
      filter(event => event instanceof NavigationEnd),
      startWith(null), // Trigger an initial emission
      map(() => routes.some(route => this.isRouteActive(route)))

    );
  }

  private isRouteActive(route: string): boolean {
    const urlTree = this.router.createUrlTree(
      [ route ],
      { relativeTo: this.route }
    );
    return this.router.isActive(urlTree, this.routeMatchOptions);
  }

}
