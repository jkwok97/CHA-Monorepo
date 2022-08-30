import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatTeamAllDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { StatsTeamAllFacade } from '../../+state/stats-team-all.facade';

@Component({
  selector: 'cha-front-stats-team-all-divisions',
  templateUrl: './stats-team-all-divisions.component.html',
  styleUrls: ['./stats-team-all-divisions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamAllDivisionsComponent {
  northWestStats$: Observable<StatTeamAllDto[]>;
  southWestStats$: Observable<StatTeamAllDto[]>;
  northEastStats$: Observable<StatTeamAllDto[]>;
  southEastStats$: Observable<StatTeamAllDto[]>;

  constructor(private statsTeamAllFacade: StatsTeamAllFacade) {
    this.northWestStats$ = this.statsTeamAllFacade.northWesternStats$;
    this.southWestStats$ = this.statsTeamAllFacade.southWesternStats$;
    this.northEastStats$ = this.statsTeamAllFacade.northEasternStats$;
    this.southEastStats$ = this.statsTeamAllFacade.southEasternStats$;
  }
}
