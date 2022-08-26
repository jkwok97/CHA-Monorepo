import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LeagueDataFacade, DisplayFacade } from '@cha/domain/core';
import { statTeamDto, TeamDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';

interface tableColumns {
  field: string;
  header: string;
}

@Component({
  selector: 'cha-front-stats-team-leaders-table',
  templateUrl: './stats-team-leaders-table.component.html',
  styleUrls: ['./stats-team-leaders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamLeadersTableComponent {
  @Input() stats!: statTeamDto[];
  @Input() tableColumns!: tableColumns[];

  teams$: Observable<TeamDto[]>;

  tableStats!: statTeamDto[];
  teams!: TeamDto[];
  isMobile = false;

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private displayFacade: DisplayFacade
  ) {
    this.teams$ = this.leagueDataFacade.leagueTeams$;

    this.teams$.pipe(first()).subscribe((teams: TeamDto[]) => {
      this.teams = teams;
    });

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  getLogo(item: any) {
    if (this.teams.length > 0) {
      const found = this.teams.find(
        (team: TeamDto) => team.id === item
      )?.teamlogo;

      if (found) {
        return this.getString(found);
      } else {
        return;
      }
    } else {
      return;
    }
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  mapItems(items: statTeamDto[]) {
    return items.map((item: statTeamDto) => ({
      ...item,
      team: `${item.nickname}`,
      teamImg: this.getString(item.teamlogo),
    }));
  }
}
