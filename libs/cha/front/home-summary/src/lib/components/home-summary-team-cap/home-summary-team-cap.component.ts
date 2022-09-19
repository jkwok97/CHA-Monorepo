import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-home-summary-team-cap',
  templateUrl: './home-summary-team-cap.component.html',
  styleUrls: ['./home-summary-team-cap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryTeamCapComponent implements OnInit {
  @Input() totalSalary!: number;
  @Input() nextTotalSalary!: number;
  @Input() totalPlayers!: number;

  currentCapHit$: Observable<number>;
  nextCapHit$: Observable<number>;

  constructor(private leagueDataFacade: LeagueDataFacade) {
    this.currentCapHit$ = this.leagueDataFacade.currentCapHit$;
    this.nextCapHit$ = this.leagueDataFacade.nextCapHit$;
  }

  ngOnInit(): void {}
}
