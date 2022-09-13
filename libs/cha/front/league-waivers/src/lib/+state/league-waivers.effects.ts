import { Injectable } from '@angular/core';
import { WaiversDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { LeagueWaiversService } from '../services';
import { LeagueWaiversActions } from './league-waivers.actions';

@Injectable()
export class LeagueWaiverssEffects {
  constructor(
    private actions$: Actions,
    private leagueWaiversService: LeagueWaiversService
  ) {}

  getWaivers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueWaiversActions.getWaivers),
      exhaustMap((action) =>
        this.leagueWaiversService.getWaivers().pipe(
          map((waivers: WaiversDto[]) =>
            LeagueWaiversActions.getWaiversSuccess({
              waivers,
            })
          ),
          catchError(() => of(LeagueWaiversActions.error()))
        )
      )
    )
  );
}
