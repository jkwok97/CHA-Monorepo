import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { WaiversDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { LeagueWaiversFacade } from '../../+state/league-waivers.facade';

@Component({
  selector: 'cha-front-league-waivers',
  templateUrl: './league-waivers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueWaiversComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  season$: Observable<string | undefined>;
  waivers$: Observable<WaiversDto[]>;

  constructor(
    private leagueWaiversFacade: LeagueWaiversFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.leagueWaiversFacade.isLoaded$;
    this.isLoading$ = this.leagueWaiversFacade.isLoading$;
    this.season$ = this.leagueDataFacade.currentSeason$;
    this.waivers$ = this.leagueWaiversFacade.waivers$;
  }

  ngOnInit(): void {
    this.leagueWaiversFacade.getWaivers();
  }
}
