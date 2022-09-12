import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { LeagueSalariesAndRatingsFacade } from '../../+state/league-salaries-ratings.facade';

@Component({
  selector: 'cha-front-league-salaries',
  templateUrl: './league-salaries.component.html',
  styleUrls: ['./league-salaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  season$: Observable<string | undefined>;
  salaries$: Observable<SalariesAndRatingsDto[]>;

  constructor(
    private leagueSalariesRatingsFacade: LeagueSalariesAndRatingsFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.leagueSalariesRatingsFacade.isLoaded$;
    this.isLoading$ = this.leagueSalariesRatingsFacade.isLoading$;
    this.season$ = this.leagueDataFacade.currentSeason$;
    this.salaries$ = this.leagueSalariesRatingsFacade.salaries$;
  }

  ngOnInit(): void {
    this.leagueSalariesRatingsFacade.getPlayerSalaries();
  }
}
