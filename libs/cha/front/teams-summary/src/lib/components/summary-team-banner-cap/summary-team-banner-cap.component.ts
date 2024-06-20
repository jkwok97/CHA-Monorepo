import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-summary-team-banner-cap',
  templateUrl: './summary-team-banner-cap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryTeamBannerCapComponent {
  @Input() totalSalary!: number;
  @Input() nextTotalSalary!: number;
  @Input() totalPlayers!: number;

  currentCapHit$: Observable<string>;
  nextCapHit$: Observable<string>;

  constructor(private leagueDataFacade: LeagueDataFacade) {
    this.currentCapHit$ = this.leagueDataFacade.currentCapHit$;
    this.nextCapHit$ = this.leagueDataFacade.nextCapHit$;
  }

  getCapNumber(capNumber: string): number {
    return Number(capNumber);
  }
}
