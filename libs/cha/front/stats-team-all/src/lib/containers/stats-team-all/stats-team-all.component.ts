import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatTeamAllDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { StatsTeamAllFacade } from '../../+state/stats-team-all.facade';

@Component({
  selector: 'cha-front-stats-team-all',
  templateUrl: './stats-team-all.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamAllComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  teamStats$: Observable<StatTeamAllDto[]>;

  backgroundColor!: string;
  showLeague = true;
  showConference = false;
  showDivisions = false;

  selectOptions = [
    { label: 'League', value: 'league' },
    { label: 'Conference', value: 'conference' },
    { label: 'Divisions', value: 'divisions' },
  ];

  selectSeasonOptions = [
    { label: 'Regular', value: 'Regular' },
    { label: 'Playoffs', value: 'Playoffs', disabled: false },
  ];

  constructor(
    private statsTeamAllFacade: StatsTeamAllFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.statsTeamAllFacade.isLoaded$;
    this.isLoading$ = this.statsTeamAllFacade.isLoading$;

    this.teamStats$ = this.statsTeamAllFacade.allStats$;
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
    this.statsTeamAllFacade.getAllTeamStats('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.statsTeamAllFacade.getAllTeamStats(option);
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'league':
        this.setLeague();
        break;
      case 'conference':
        this.setConference();
        break;
      case 'divisions':
        this.setDivisions();
        break;
      default:
        return;
    }
  }

  setLeague() {
    this.showLeague = true;
    this.showConference = false;
    this.showDivisions = false;
  }

  setConference() {
    this.showLeague = false;
    this.showDivisions = false;
    this.showConference = true;
  }

  setDivisions() {
    this.showDivisions = true;
    this.showLeague = false;
    this.showConference = false;
  }
}
