import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/stats-team-leaders.facade';

@Component({
  selector: 'cha-front-stats-team-leaders',
  templateUrl: './stats-team-leaders.component.html',
  styleUrls: ['./stats-team-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.isLoading$ = this.leagueStatsTeamFacade.isLoading$;
    this.isLoaded$ = this.leagueStatsTeamFacade.isLoaded$;
  }

  ngOnInit(): void {
    this.leagueStatsTeamFacade.getLeagueTeamStats();
  }
}
