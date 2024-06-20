import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-home-summary-team-cap',
  templateUrl: './home-summary-team-cap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryTeamCapComponent {
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
