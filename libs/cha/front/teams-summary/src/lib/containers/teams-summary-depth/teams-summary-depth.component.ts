import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { first } from 'rxjs';

@Component({
  selector: 'cha-front-teams-summary-depth',
  templateUrl: './teams-summary-depth.component.html',
  styleUrls: ['./teams-summary-depth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryDepthComponent {
  isOffSeason = false;

  constructor(private leagueDataFacade: LeagueDataFacade) {
    this.leagueDataFacade.isOffSeason$
      .pipe(first())
      .subscribe((isOffSeason: boolean) => {
        this.isOffSeason = isOffSeason;
      });
  }
}
