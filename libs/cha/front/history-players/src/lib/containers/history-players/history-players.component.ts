import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatPlayersHistoryDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { HistoryPlayersFacade } from '../../+state/history-players.facade';

@Component({
  selector: 'cha-front-history-players',
  templateUrl: './history-players.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPlayersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  allStats$: Observable<StatPlayersHistoryDto[]>;
  forwardStats$!: Observable<StatPlayersHistoryDto[]>;
  defenseStats$!: Observable<StatPlayersHistoryDto[]>;

  seasonOption = 'Regular';
  statType = 'season';
  positionOption = 'all';

  selectOptions = [
    { label: 'Per Season', value: 'season' },
    { label: 'All-time', value: 'all' },
  ];

  selectSeasonOptions = [
    { label: 'Regular', value: 'Regular' },
    { label: 'Playoffs', value: 'Playoffs', disabled: false },
  ];

  selectPositionOptions = [
    { label: 'All', value: 'all' },
    { label: 'Forwards', value: 'forwards' },
    { label: 'Defense', value: 'defense' },
  ];

  constructor(
    private historyPlayersFacade: HistoryPlayersFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.historyPlayersFacade.isLoaded$;
    this.isLoading$ = this.historyPlayersFacade.isLoading$;

    this.allStats$ = this.historyPlayersFacade.allStats$;

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
    this.historyPlayersFacade.getAllTimePlayersStatBySeason('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.seasonOption = option;
    this.historyPlayersFacade.getAllTimePlayersStatBySeason(option);
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'season':
        this.statType = option;
        this.historyPlayersFacade.getAllTimePlayersStatBySeason(
          this.seasonOption
        );
        break;
      case 'all':
        this.statType = option;
        this.historyPlayersFacade.getAllTimePlayersStatSummedBySeason(
          this.seasonOption
        );
        break;
      default:
        return;
    }
  }

  selectPositionOptionChanged(option: string) {
    switch (option) {
      case 'all':
        this.positionOption = option;
        this.allStats$ = this.historyPlayersFacade.allStats$;
        break;
      case 'forwards':
        this.positionOption = option;
        this.forwardStats$ = this.historyPlayersFacade.forwardStats$;
        break;
      case 'defense':
        this.positionOption = option;
        this.defenseStats$ = this.historyPlayersFacade.defenseStats$;
        break;
      default:
        return;
    }
  }
}
