import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DraftTableDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-draft-mgmt-table-table',
  templateUrl: './draft-mgmt-table-table.component.html',
  styleUrls: ['./draft-mgmt-table-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtTableTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() draftTableItems!: DraftTableDto[];

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

  onAddClick() {
    this.draftTableItem = null;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.draftTableItem = null;
  }
}
