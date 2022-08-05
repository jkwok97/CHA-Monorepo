import { Injectable } from '@angular/core';
import { AwardDto } from '@cha/shared/entities';
import { AwardsService } from '@cha/shared/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AwardActions } from './awards.action';

@Injectable()
export class AwardEffects {
  constructor(private actions$: Actions, private awardService: AwardsService) {}

  getChampions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getChampions),
      exhaustMap((action) =>
        this.awardService.getChampions().pipe(
          map((awards: AwardDto[]) => AwardActions.getAwardSuccess({ awards })),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );

  getScorers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getScorers),
      exhaustMap((action) =>
        this.awardService.getScorers().pipe(
          map((awards: AwardDto[]) => AwardActions.getAwardSuccess({ awards })),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );

  getDefense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getDefense),
      exhaustMap((action) =>
        this.awardService.getDefense().pipe(
          map((awards: AwardDto[]) => AwardActions.getAwardSuccess({ awards })),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );

  getRookies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getRookies),
      exhaustMap((action) =>
        this.awardService.getRookies().pipe(
          map((awards: AwardDto[]) => AwardActions.getAwardSuccess({ awards })),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );

  getGoalies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getGoalies),
      exhaustMap((action) =>
        this.awardService.getGoalies().pipe(
          map((awards: AwardDto[]) => AwardActions.getAwardSuccess({ awards })),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );

  getGm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getGm),
      exhaustMap((action) =>
        this.awardService.getGm().pipe(
          map((awards: AwardDto[]) => AwardActions.getAwardSuccess({ awards })),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );

  getSeason$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getSeason),
      exhaustMap((action) =>
        this.awardService.getSeason().pipe(
          map((awards: AwardDto[]) => AwardActions.getAwardSuccess({ awards })),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );
}
