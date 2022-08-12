import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

const NAMESPACE = '[Router]';

const init = createAction(`${NAMESPACE} INIT`);

const go = createAction(
  `${NAMESPACE} Go`,
  props<{
    path: any[];
    url: string;
    query?: Record<string, unknown>;
    extras?: NavigationExtras;
  }>()
);

const goByUrl = createAction(
  `${NAMESPACE} Go By Url`,
  props<{
    path: any[];
    url: string;
    query?: Record<string, unknown>;
    extras?: NavigationExtras;
  }>()
);

const back = createAction(`${NAMESPACE} Back`);

const forward = createAction(`${NAMESPACE} Forward`);

export const urlRouterActions = {
  init,
  go,
  goByUrl,
  back,
  forward,
};
