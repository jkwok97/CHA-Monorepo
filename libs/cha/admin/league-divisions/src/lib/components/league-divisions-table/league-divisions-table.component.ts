import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DivisionDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-league-divisions-table',
  templateUrl: './league-divisions-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() divisions!: DivisionDto[];

  @ViewChild('dt') dt: Table | undefined;

  tableColumns = [
    { field: 'id', header: 'Division Id', visible: true },
    { field: 'divisionname', header: 'Name', visible: true },
    { field: 'conference_id', header: 'Conference', visible: true },
    { field: 'isactive', header: 'Active', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'isactive';
  display = false;
  divisionsForTable!: any;
  division!: DivisionDto | null;

  ngOnInit(): void {
    this.divisionsForTable = this.mapItems(this.divisions);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(divisions: DivisionDto[]) {
    return divisions.map((division: DivisionDto) => ({
      ...division,
    }));
  }

  onClick(division: DivisionDto) {
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
