import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { DraftTableDto, TeamDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';
import { first } from 'rxjs';

@Component({
  selector: 'cha-admin-draft-mgmt-table-table',
  templateUrl: './draft-mgmt-table-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtTableTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() draftTableItems!: DraftTableDto[];

  teams!: TeamDto[];

  @ViewChild('dt') dt: Table | undefined;

  tableColumns = [
    { field: 'id', header: 'Pick Id' },
    { field: 'draft_year', header: 'Year' },
    { field: 'team', header: 'Team' },
    { field: 'round_one', header: 'Round 1' },
    { field: 'round_two', header: 'Round 2' },
    { field: 'round_three', header: 'Round 3' },
    { field: 'round_four', header: 'Round 4' },
    { field: 'round_five', header: 'Round 5' },
    { field: 'action', header: 'Edit' },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'full_name';
  display = false;
  draftTableItemsForTable!: any;
  draftTableItem!: DraftTableDto | null;

  constructor(private leagueDataFacade: LeagueDataFacade) {
    this.leagueDataFacade.leagueTeams$
      .pipe(first())
      .subscribe((teams: TeamDto[]) => (this.teams = teams));
  }

  ngOnInit(): void {
    this.draftTableItemsForTable = this.mapItems(this.draftTableItems);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(items: DraftTableDto[]) {
    return items.map((item: DraftTableDto) => ({
      ...item,
      team: `${item.team_id.city} ${item.team_id.nickname}`,
    }));
  }

  onClick(draftTableItem: DraftTableDto) {
    this.draftTableItem = draftTableItem;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.draftTableItem = null;
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
}
