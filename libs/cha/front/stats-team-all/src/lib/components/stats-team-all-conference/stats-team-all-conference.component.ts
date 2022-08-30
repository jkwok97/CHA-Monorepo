import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StatTeamAllDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { StatsTeamAllFacade } from '../../+state/stats-team-all.facade';

@Component({
  selector: 'cha-front-stats-team-all-conference',
  templateUrl: './stats-team-all-conference.component.html',
  styleUrls: ['./stats-team-all-conference.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamAllConferenceComponent implements OnInit {
  westernStats$: Observable<StatTeamAllDto[]>;
  easternStats$: Observable<StatTeamAllDto[]>;

  constructor(private statsTeamAllFacade: StatsTeamAllFacade) {
    this.westernStats$ = this.statsTeamAllFacade.westernStats$;
    this.easternStats$ = this.statsTeamAllFacade.easternStats$;
  }

  ngOnInit(): void {}
}
