import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SalaryAllDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-player-mgmt-salaries-table',
  templateUrl: './player-mgmt-salaries-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() salaries!: SalaryAllDto[];

  @ViewChild('dt') dt: Table | undefined;

  // TODO UPDATE COLUMNS AFTER EVERY SEASON
  salaryTableColumns = [
    { field: 'id', header: 'Salary Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'season_2024', header: '2023-24', visible: true },
    { field: 'season_2025', header: '2024-25', visible: true },
    { field: 'season_2026', header: '2025-26', visible: true },
    { field: 'season_2027', header: '2026-27', visible: true },
    { field: 'season_2028', header: '2027-28', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  mobileSalaryTableColumns = [
    { field: 'id', header: 'Salary Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'season_2024', header: '2023-24', visible: true },
    { field: 'season_2025', header: '2024-25', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'full_name';
  statsForTable!: any;
  display = false;
  salariesForTable!: any;
  salary!: SalaryAllDto | null;

  ngOnInit(): void {
    this.salariesForTable = this.mapItems(this.salaries);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(salaries: SalaryAllDto[]) {
    return salaries.map((salary: SalaryAllDto) => ({
      ...salary,
      full_name: `${salary.playerInfo?.firstname} ${salary.playerInfo?.lastname}`,
    }));
  }

  onSalaryClick(salary: SalaryAllDto) {
    this.salary = salary;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.salary = null;
  }
}
