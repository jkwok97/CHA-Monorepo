import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatPlayerAllDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { StatsPlayerAllFacade } from '../../+state/stats-player-all.facade';

@Component({
  selector: 'cha-front-stats-player-all',
  templateUrl: './stats-player-all.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPlayerAllComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  playerStats$: Observable<StatPlayerAllDto[]>;
  forwardStats$: Observable<StatPlayerAllDto[]>;
  defenseStats$: Observable<StatPlayerAllDto[]>;

  showAll = true;
  showForwards = false;
  showDefense = false;

  selectOptions = [
    { label: 'All', value: 'all' },
    { label: 'Forwards', value: 'forwards' },
    { label: 'Defense', value: 'defense' },
  ];

  selectSeasonOptions = [
    { label: 'Regular', value: 'Regular' },
    { label: 'Playoffs', value: 'Playoffs', disabled: false },
  ];

  constructor(
    private statsPlayerAllFacade: StatsPlayerAllFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.statsPlayerAllFacade.isLoaded$;
    this.isLoading$ = this.statsPlayerAllFacade.isLoading$;

    this.playerStats$ = this.statsPlayerAllFacade.allStats$;
    this.forwardStats$ = this.statsPlayerAllFacade.forwardStats$;
    this.defenseStats$ = this.statsPlayerAllFacade.defenseStats$;

    this.leagueDataFacade.isOffSeason$
      .pipe(first())
      .subscribe((isOffSeason: boolean) => {
        // this.selectSeasonOptions = [
        //   { label: 'Regular', value: 'Regular' },
        //   { label: 'Playoffs', value: 'Playoffs', disabled: !isOffSeason },
        // ];
        this.selectSeasonOptions = [
          { label: 'Regular', value: 'Regular' },
          { label: 'Playoffs', value: 'Playoffs', disabled: true },
        ];
      });
  }

  ngOnInit(): void {
    this.statsPlayerAllFacade.getAllPlayerStats('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.statsPlayerAllFacade.getAllPlayerStats(option);
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'all':
        this.setAll();
        break;
      case 'forwards':
        this.setForwards();
        break;
      case 'defense':
        this.setDefense();
        break;
      default:
        return;
    }
  }

  setAll() {
    this.showAll = true;
    this.showForwards = false;
    this.showDefense = false;
  }

  setForwards() {
    this.showAll = false;
    this.showDefense = false;
    this.showForwards = true;
  }

  setDefense() {
    this.showDefense = true;
    this.showForwards = false;
    this.showAll = false;
  }
}
