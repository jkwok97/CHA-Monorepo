import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-home-team-cap',
  templateUrl: './home-team-cap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTeamCapComponent {
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
