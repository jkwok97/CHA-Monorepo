import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatGoaliesHistoryDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { HistoryGoaliesFacade } from '../../+state/history-goalies.facade';

@Component({
  selector: 'cha-front-history-goalies',
  templateUrl: './history-goalies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryGoaliesComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  allStats$: Observable<StatGoaliesHistoryDto[]>;

  seasonOption = 'Regular';
  statType = 'season';

  selectOptions = [
    { label: 'Per Season', value: 'season' },
    { label: 'All-time', value: 'all' },
  ];

  selectSeasonOptions = [
    { label: 'Regular', value: 'Regular' },
    { label: 'Playoffs', value: 'Playoffs', disabled: false },
  ];

  constructor(
    private historyGoaliesFacade: HistoryGoaliesFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.historyGoaliesFacade.isLoaded$;
    this.isLoading$ = this.historyGoaliesFacade.isLoading$;

    this.allStats$ = this.historyGoaliesFacade.allStats$;

    this.leagueDataFacade.isOffSeason$
      .pipe(first())
      .subscribe((isOffSeason: boolean) => {
        this.selectSeasonOptions = [
          { label: 'Regular', value: 'Regular' },
          { label: 'Playoffs', value: 'Playoffs', disabled: !isOffSeason },
        ];
      });
  }

  ngOnInit(): void {
    this.historyGoaliesFacade.getAllTimeGoaliesStatBySeason('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.seasonOption = option;
    this.historyGoaliesFacade.getAllTimeGoaliesStatBySeason(option);
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'season':
        this.statType = option;
        this.historyGoaliesFacade.getAllTimeGoaliesStatBySeason(
          this.seasonOption
        );
        break;
      case 'all':
        this.statType = option;
        this.historyGoaliesFacade.getAllTimeGoaliesStatSummedBySeason(
          this.seasonOption
        );
        break;
      default:
        return;
    }
  }
}
