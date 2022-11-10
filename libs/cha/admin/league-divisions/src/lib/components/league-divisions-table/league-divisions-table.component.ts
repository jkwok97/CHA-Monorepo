import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GetDivisionDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-league-divisions-table',
  templateUrl: './league-divisions-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() divisions!: GetDivisionDto[];

  @ViewChild('dt') dt: Table | undefined;

  tableColumns = [
    { field: 'id', header: 'Division Id', visible: true },
    { field: 'divisionname', header: 'Name', visible: true },
    { field: 'conference', header: 'Conference', visible: true },
    { field: 'isactive', header: 'Active', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'isactive';
  display = false;
  divisionsForTable!: any;
  division!: GetDivisionDto | null;

  ngOnInit(): void {
    this.divisionsForTable = this.mapItems(this.divisions);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(divisions: GetDivisionDto[]) {
    return divisions.map((division: GetDivisionDto) => ({
      ...division,
      conference: `${division.conference_id.conferencename}`,
    }));
  }

  onClick(division: GetDivisionDto) {
    this.division = division;
    this.display = true;
  }

  onAddClick() {
    this.division = null;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.division = null;
  }
}
