import { Injectable } from '@angular/core';
import { LeagueDataDto } from '@cha/shared/entities';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { LeagueCurrentDataService } from '../services';
import { LeagueCurrentDataActions } from './league-current-data.actions';
import { LeagueCurrentDataFacade } from './league-current-data.facade';

@Injectable()
export class LeagueCurrentDataEffects {
  constructor(
    private actions$: Actions,
    private leagueCurrentDataService: LeagueCurrentDataService,
    private leagueCurrentDataFacade: LeagueCurrentDataFacade,
    private messageService: MessageService
  ) {}

  getData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueCurrentDataActions.getData),
      exhaustMap((action) =>
        this.leagueCurrentDataService.getData().pipe(
          map((data: LeagueDataDto) =>
            LeagueCurrentDataActions.getDataSuccess({
              data,
            })
          ),
          catchError(() => of(LeagueCurrentDataActions.error()))
        )
      )
    )
  );

  
}
