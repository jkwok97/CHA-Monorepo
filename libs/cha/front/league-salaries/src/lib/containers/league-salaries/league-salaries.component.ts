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
  offSeason$: Observable<boolean>;

  selectOptions = [
    { label: 'Players', value: 'players' },
    { label: 'Goalies', value: 'goalies' },
  ];

  optionType = 'players';

  constructor(
    private leagueSalariesRatingsFacade: LeagueSalariesAndRatingsFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.leagueSalariesRatingsFacade.isLoaded$;
    this.isLoading$ = this.leagueSalariesRatingsFacade.isLoading$;
    this.season$ = this.leagueDataFacade.currentSeason$;
    this.salaries$ = this.leagueSalariesRatingsFacade.salaries$;
    this.offSeason$ = this.leagueDataFacade.isOffSeason$;
  }

  ngOnInit(): void {
    this.leagueSalariesRatingsFacade.getPlayerSalaries();
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'players':
        this.leagueSalariesRatingsFacade.getPlayerSalaries();
        this.optionType = option;
        break;
      case 'goalies':
        this.leagueSalariesRatingsFacade.getGoaliesSalaries();
        this.optionType = option;
        break;
      default:
        return;
    }
  }
}
