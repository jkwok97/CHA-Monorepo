import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatGoalieAllDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { StatsGoalieAllFacade } from '../../+state/stats-goalie-all.facade';

@Component({
  selector: 'cha-front-stats-goalie-all',
  templateUrl: './stats-goalie-all.component.html',
  styleUrls: ['./stats-goalie-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsGoalieAllComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  goalieStats$: Observable<StatGoalieAllDto[]>;

  selectSeasonOptions = [
    { label: 'Regular', value: 'Regular' },
    { label: 'Playoffs', value: 'Playoffs', disabled: false },
  ];

  constructor(
    private statsGoalieAllFacade: StatsGoalieAllFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.statsGoalieAllFacade.isLoaded$;
    this.isLoading$ = this.statsGoalieAllFacade.isLoading$;

    this.goalieStats$ = this.statsGoalieAllFacade.allStats$;

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
    this.statsGoalieAllFacade.getAllGoalieStats('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.statsGoalieAllFacade.getAllGoalieStats(option);
  }
}
