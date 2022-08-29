import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserTeamFacade } from '@cha/domain/core';
import { TeamDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
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
  currentTeam$: Observable<TeamDto | undefined>;

  backgroundColor!: string;

  constructor(
    private statsTeamAllFacade: StatsTeamAllFacade,
    private userTeamFacade: UserTeamFacade
  ) {
    this.isLoaded$ = this.statsTeamAllFacade.isLoaded$;
    this.isLoading$ = this.statsTeamAllFacade.isLoading$;

    this.currentTeam$ = this.userTeamFacade.currentUserTeam$;

    this.currentTeam$
      .pipe(first())
      .subscribe((userTeam: TeamDto | undefined) => {
        if (userTeam) {
          this.backgroundColor = userTeam.teamcolor;
        }
      });
  }

  ngOnInit(): void {
    this.statsTeamAllFacade.getAllTeamStats();
  }
}
