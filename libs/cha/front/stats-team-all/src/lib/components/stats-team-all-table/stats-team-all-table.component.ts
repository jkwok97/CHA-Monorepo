import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatTeamAllDto } from '@cha/shared/entities';
import { first } from 'rxjs';

@Component({
  selector: 'cha-front-stats-team-all-table',
  templateUrl: './stats-team-all-table.component.html',
  styleUrls: ['./stats-team-all-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamAllTableComponent implements OnInit {
  @Input() stats!: StatTeamAllDto[];

  display = false;
  teamStats!: any;

  playerTableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'games_played', header: 'GP' },
    { field: 'wins', header: 'W' },
    { field: 'loss', header: 'L' },
    { field: 'ties', header: 'T' },
    { field: 'points', header: 'Pts' },
    { field: 'goals_for', header: 'GF' },
    { field: 'goals_for_per_game', header: 'GF/g' },
    { field: 'goals_against', header: 'GA' },
    { field: 'goals_against_per_game', header: 'GA/g' },
    { field: 'goal_diff', header: 'Goal Diff' },
    { field: 'win_efficiency', header: 'Win%' },
    { field: 'pp_efficiency', header: 'PP%' },
    { field: 'pk_efficiency', header: 'PK%' },
    { field: 'pim_per_game', header: 'PIM/g' },
    { field: 'div_record', header: 'Division' },
    { field: 'home_record', header: 'Home' },
    { field: 'away_recond', header: 'Away' },
    { field: 'trailing_record', header: 'Trailing After 2' },
  ];

  mobilePlayerTableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'points', header: 'Pts' },
    { field: 'action', header: '...More' },
  ];

  sortField = 'points';
  isMobile = false;

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.stats = this.mapItems(this.stats).sort(
      (a, b) => Number(b.points) - Number(a.points)
    );
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  mapItems(stats: StatTeamAllDto[]) {
    return stats.map((stat: StatTeamAllDto) => ({
      ...stat,
      teamLogo: this.getString(stat.team_id.teamlogo),
    }));
  }

  onTeamClick(stat: StatTeamAllDto) {
    this.teamStats = stat;
    this.display = true;
  }
}
