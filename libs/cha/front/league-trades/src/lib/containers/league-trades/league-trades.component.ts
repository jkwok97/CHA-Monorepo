import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, startWith } from 'rxjs';
import { LeagueTradesFacade } from '../../+state/league-trades.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-league-trades',
  templateUrl: './league-trades.component.html',
  styleUrls: ['./league-trades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTradesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  transactionsYear!: FormControl;

  constructor(
    private leagueTradesFacade: LeagueTradesFacade,
    private fb: FormBuilder
  ) {
    this.isLoaded$ = this.leagueTradesFacade.isLoaded$;
    this.isLoading$ = this.leagueTradesFacade.isLoading$;
  }

  ngOnInit(): void {
    this.transactionsYear = this.fb.control(new Date('01-01-2023'));

    this.transactionsYear.valueChanges
      .pipe(startWith(this.transactionsYear.value), untilDestroyed(this))
      .subscribe((value) => {
        const year = new Date(value).getFullYear().toString().substring(2);
        this.leagueTradesFacade.getTransactions(year);
      });
  }
}
