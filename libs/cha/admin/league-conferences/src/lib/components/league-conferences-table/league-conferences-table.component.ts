import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ConferenceDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-league-conferences-table',
  templateUrl: './league-conferences-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueConferencesTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() conferences!: ConferenceDto[];

  @ViewChild('dt') dt: Table | undefined;

  tableColumns = [
    { field: 'id', header: 'Conference Id', visible: true },
    { field: 'conferencename', header: 'Name', visible: true },
    { field: 'isactive', header: 'Active', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'isactive';
  display = false;
  conferencesForTable!: any;
  conference!: ConferenceDto | null;

  ngOnInit(): void {
    this.conferencesForTable = this.mapItems(this.conferences);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(conferences: ConferenceDto[]) {
    return conferences.map((conference: ConferenceDto) => ({
      ...conference,
    }));
  }

  onClick(conference: ConferenceDto) {
    this.conference = conference;
    this.display = true;
  }

  onAddClick() {
    this.conference = null;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.conference = null;
  }
}
