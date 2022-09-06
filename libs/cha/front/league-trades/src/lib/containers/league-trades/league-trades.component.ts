import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueTradesFacade } from '../../+state/league-trades.facade';

@Component({
  selector: 'cha-front-league-trades',
  templateUrl: './league-trades.component.html',
  styleUrls: ['./league-trades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTradesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private leagueTradesFacade: LeagueTradesFacade) {
    this.isLoaded$ = this.leagueTradesFacade.isLoaded$;
    this.isLoading$ = this.leagueTradesFacade.isLoading$;
  }

  ngOnInit(): void {
    this.leagueTradesFacade.getTransactions('23');
  }
}
