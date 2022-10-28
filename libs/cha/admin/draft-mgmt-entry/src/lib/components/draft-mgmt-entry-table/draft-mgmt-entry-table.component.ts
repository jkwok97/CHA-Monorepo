import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DraftPickDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-draft-mgmt-entry-table',
  templateUrl: './draft-mgmt-entry-table.component.html',
  styleUrls: ['./draft-mgmt-entry-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtEntryTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() draftPicks!: DraftPickDto[];

  @ViewChild('dt') dt: Table | undefined;

  tableColumns = [
    { field: 'id', header: 'Pick Id' },
    { field: 'draft_year', header: 'Year' },
    { field: 'orgTeam', header: 'Team' },
    { field: 'draft_round', header: 'Round' },
    { field: 'draft_overall', header: 'Overall' },
    { field: 'player', header: 'Player' },
    { field: 'team', header: 'Picked By' },
    { field: 'action', header: 'Edit' },
  ];

  mobileTableColumns = [
    { field: 'draft_year', header: 'Year' },
    { field: 'orgTeam', header: 'Team' },
    { field: 'draft_round', header: 'Round' },
    { field: 'draft_overall', header: 'Overall' },
    { field: 'player', header: 'Player' },
    { field: 'team', header: 'Picked By' },
    { field: 'action', header: 'Edit' },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'full_name';
  statsForTable!: any;
  display = false;
  picksForTable!: any;
  pick!: DraftPickDto | null;

  constructor() {}

  ngOnInit(): void {
    this.picksForTable = this.mapItems(this.draftPicks);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(items: DraftPickDto[]) {
    return items.map((item: DraftPickDto) => ({
      ...item,
      team: `${item.team_id.city} ${item.team_id.nickname}`,
      orgTeam: `${item.pick_team_id?.city} ${item.pick_team_id?.nickname}`,
      player: `${item.player_id?.firstname} ${item.player_id?.lastname}`,
    }));
  }

  onClick(pick: DraftPickDto) {
    this.pick = pick;
    this.display = true;
  }

  onAddClick() {
    this.pick = null;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.pick = null;
  }
}
