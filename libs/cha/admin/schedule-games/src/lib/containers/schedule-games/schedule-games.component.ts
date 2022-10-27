import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { ScheduleAllDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { ScheduleGamesFacade } from '../../+state/schedule-games.facade';

@Component({
  selector: 'cha-admin-schedule-games',
  templateUrl: './schedule-games.component.html',
  styleUrls: ['./schedule-games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleGamesComponent implements OnInit {
  isLoaded$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  games$: Observable<ScheduleAllDto[]>;

  isMobile!: boolean;

  constructor(
    private scheduleGamesFacade: ScheduleGamesFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.scheduleGamesFacade.isLoaded$;
    this.isLoading$ = this.scheduleGamesFacade.isLoading$;
    this.games$ = this.scheduleGamesFacade.schedule$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.scheduleGamesFacade.getSchedule();
  }
}
