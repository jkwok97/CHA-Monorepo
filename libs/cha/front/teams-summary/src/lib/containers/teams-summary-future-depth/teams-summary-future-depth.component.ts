import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { first } from 'rxjs';

@Component({
  selector: 'cha-front-teams-summary-future-depth',
  templateUrl: './teams-summary-future-depth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryFutureDepthComponent {
  isOffSeason = false;

  constructor(private leagueDataFacade: LeagueDataFacade) {
    this.leagueDataFacade.isOffSeason$
      .pipe(first())
      .subscribe((isOffSeason: boolean) => {
        this.isOffSeason = isOffSeason;
      });
  }
}
