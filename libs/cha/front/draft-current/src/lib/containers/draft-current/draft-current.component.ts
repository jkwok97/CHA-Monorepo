import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { DraftTableDto, LeagueDataDto, TeamDto } from '@cha/shared/entities';
import { Observable, first, tap } from 'rxjs';
import { DraftCurrentFacade } from '../../+state/draft-current.facade';

@Component({
  selector: 'cha-front-draft-current',
  templateUrl: './draft-current.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftCurrentComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  draftTableItems$: Observable<DraftTableDto[]>;
  teams$: Observable<TeamDto[]>;

  teams!: TeamDto[];

  selectOptions = [
    { label: '2025', value: '2025' },
    { label: '2026', value: '2026' },
  ];

  tableColumns = [
    { field: 'pickNumber', header: 'Pick #' },
    { field: 'team', header: 'Team' },
    { field: 'round_one', header: 'Round 1' },
    { field: 'round_two', header: 'Round 2' },
    { field: 'round_three', header: 'Round 3' },
    { field: 'round_four', header: 'Round 4' },
  ];

  filteringOptions = [
    'team',
    'round_one_team',
    'round_two_team',
    'round_three_team',
    'round_four_team',
  ];

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private draftCurrentFacade: DraftCurrentFacade
  ) {
    this.isLoading$ = this.draftCurrentFacade.isLoading$;
    this.isLoaded$ = this.draftCurrentFacade.isLoaded$;
    this.draftTableItems$ = this.draftCurrentFacade.draftTable$;
    this.teams$ = this.leagueDataFacade.leagueTeams$;
  }

  ngOnInit(): void {
    this.leagueDataFacade.leagueData$
      .pipe(
        first(),
        tap(
          (data: LeagueDataDto) => this.draftCurrentFacade.getDraftTable(2025) // THIS CHANGES
        )
      )
      .subscribe();

    this.teams$
      .pipe(first())
      .subscribe((teams: TeamDto[]) => (this.teams = teams));
  }

  mapItems(items: DraftTableDto[]) {
    return items.map((item: DraftTableDto) => ({
      ...item,
      team: `${item.team_id.city} ${item.team_id.nickname}`,
      teamImg: this.getString(item.team_id.teamlogo),
      round_one_team: this.getTeamName(item.round_one),
      round_two_team: this.getTeamName(item.round_two),
      round_three_team: this.getTeamName(item.round_three),
      round_four_team: this.getTeamName(item.round_four),
      round_five_team: this.getTeamName(item.round_five),
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  getTeamName(teamNum: number): string {
    const found = this.teams.find((team: TeamDto) => team.id === teamNum);

    if (found) {
      return `${found.city} ${found.nickname}`;
    } else {
      return ``;
    }
  }

  onOptionChanged(option: string) {
    this.draftCurrentFacade.getDraftTable(Number(option));
  }
}
