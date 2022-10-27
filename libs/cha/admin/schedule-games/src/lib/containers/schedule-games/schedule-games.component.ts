import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScheduleAllDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
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

  constructor(private scheduleGamesFacade: ScheduleGamesFacade) {
    this.isLoaded$ = this.scheduleGamesFacade.isLoaded$;
    this.isLoading$ = this.scheduleGamesFacade.isLoading$;
    this.games$ = this.scheduleGamesFacade.schedule$;
  }

  ngOnInit(): void {
    this.scheduleGamesFacade.getSchedule();
  }
}
