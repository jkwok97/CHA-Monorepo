import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { HistoryTeamsFacade } from '../../+state/history-teams.facade';

@Component({
  selector: 'cha-front-history-teams',
  templateUrl: './history-teams.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryTeamsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  allStats$: Observable<StatTeamsHistoryDto[]>;

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
    private historyTeamsFacade: HistoryTeamsFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.historyTeamsFacade.isLoaded$;
    this.isLoading$ = this.historyTeamsFacade.isLoading$;

    this.allStats$ = this.historyTeamsFacade.allStats$;

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
    this.historyTeamsFacade.getAllTimeTeamsStatBySeason('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.seasonOption = option;
    this.historyTeamsFacade.getAllTimeTeamsStatBySeason(option);
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'season':
        this.statType = option;
        this.historyTeamsFacade.getAllTimeTeamsStatBySeason(this.seasonOption);
        break;
      case 'all':
        this.statType = option;
        this.historyTeamsFacade.getAllTimeTeamsStatSummedBySeason(
          this.seasonOption
        );
        break;
      default:
        return;
    }
  }
}
