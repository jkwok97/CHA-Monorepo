import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { urlRouterActions } from './url-router.actions';
import { UrlRouterService } from '../services';

@Injectable()
export class UrlRouterEffects implements OnInitEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private routerService: UrlRouterService
  ) {}

  init$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(urlRouterActions.init),
        tap(() => this.routerService.init())
      ),
    { dispatch: false }
  );

  go$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(urlRouterActions.go),
        tap(({ path, query: queryParams, extras }) =>
          this.router.navigate(path, { queryParams, ...extras })
        )
      ),
    { dispatch: false }
  );

  goByUrl$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(urlRouterActions.goByUrl),
        tap(({ url, extras }) => this.router.navigateByUrl(url, extras))
      ),
    { dispatch: false }
  );

  back$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(urlRouterActions.back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  forward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(urlRouterActions.forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );

  ngrxOnInitEffects(): Action {
    return urlRouterActions.init();
  }
}
