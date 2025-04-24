import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { DraftPickDto, TeamDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { DraftSummaryFacade } from '../../+state/draft-summary.facade';

@Component({
  selector: 'cha-front-draft-summary',
  templateUrl: './draft-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftSummaryComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  draftPicks$: Observable<DraftPickDto[]>;
  teams$: Observable<TeamDto[]>;

  teams!: TeamDto[];

  tableColumns = [
    { field: 'draft_year', header: 'Year' },
    { field: 'orgTeam', header: 'Team' },
    { field: 'draft_round', header: 'Round' },
    { field: 'draft_overall', header: 'Overall' },
    { field: 'player', header: 'Player' },
    { field: 'team', header: 'Picked By' },
  ];

  filteringOptions = [
    'draft_year',
    'draft_round',
    'draft_overall',
    'player',
    'team',
  ];

  constructor(
    private draftSummaryFacade: DraftSummaryFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.draftSummaryFacade.isLoaded$;
    this.isLoading$ = this.draftSummaryFacade.isLoading$;
    this.draftPicks$ = this.draftSummaryFacade.draftPicks$;
    this.teams$ = this.leagueDataFacade.leagueTeams$;
  }

  ngOnInit(): void {
    this.draftSummaryFacade.getDraftPicks();
  }

  mapItems(items: DraftPickDto[]) {
    return items.map((item: DraftPickDto) => ({
      ...item,
      team: `${item.team_id.city} ${item.team_id.nickname}`,
      player: `${item.player_id?.firstname} ${item.player_id?.lastname}`,
      playerImg: this.getPlayerPicture(item.player_id?.nhl_id),
      teamImg: this.getString(item.team_id.teamlogo),
      orgTeam: `${item.pick_team_id ? item.pick_team_id.city : ''} ${
        item.pick_team_id ? item.pick_team_id.nickname : ''
      }`,
      orgTeamImg: item.pick_team_id
        ? this.getString(item.pick_team_id.teamlogo)
        : '',
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  getPlayerPicture(id: string) {
    if (id) {
      return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
    } else {
      return;
    }
  }
}
