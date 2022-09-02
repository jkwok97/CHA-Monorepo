import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScheduleAllDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { GamesAllFacade } from '../../+state/games-all.facade';

@Component({
  selector: 'cha-front-games-all',
  templateUrl: './games-all.component.html',
  styleUrls: ['./games-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesAllComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  season$: Observable<string>;
  schedule$: Observable<ScheduleAllDto[]>;

  constructor(private gamesAllFacade: GamesAllFacade) {
    this.isLoaded$ = this.gamesAllFacade.isLoaded$;
    this.isLoading$ = this.gamesAllFacade.isLoading$;
    this.season$ = this.gamesAllFacade.season$;
    this.schedule$ = this.gamesAllFacade.schedule$;
  }

  ngOnInit(): void {
    this.gamesAllFacade.getSchedule();
  }
}
