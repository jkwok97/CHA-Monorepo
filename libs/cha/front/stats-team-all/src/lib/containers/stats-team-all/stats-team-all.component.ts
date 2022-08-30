import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StatTeamAllDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { StatsTeamAllFacade } from '../../+state/stats-team-all.facade';

@Component({
  selector: 'cha-front-stats-team-all',
  templateUrl: './stats-team-all.component.html',
  styleUrls: ['./stats-team-all.component.scss'],
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

  constructor(private statsTeamAllFacade: StatsTeamAllFacade) {
    this.isLoaded$ = this.statsTeamAllFacade.isLoaded$;
    this.isLoading$ = this.statsTeamAllFacade.isLoading$;

    this.teamStats$ = this.statsTeamAllFacade.allStats$;
  }

  ngOnInit(): void {
    this.statsTeamAllFacade.getAllTeamStats();
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
