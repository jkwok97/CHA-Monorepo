import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { DisplayService } from '../../services';
import { DisplayActions } from './display.actions';

@Injectable()
export class DisplayEffects {
  constructor(
    private actions$: Actions,
    private displayService: DisplayService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DisplayActions.get),
      exhaustMap((action) =>
        this.displayService.checkMobile().pipe(
          map((isMobile: boolean) => DisplayActions.getSuccess({ isMobile })),
          catchError(() => of(DisplayActions.error()))
        )
      )
    )
  );
}
