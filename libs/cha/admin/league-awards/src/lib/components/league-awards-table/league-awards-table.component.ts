import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AwardDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-league-awards-table',
  templateUrl: './league-awards-table.component.html',
  styleUrls: ['./league-awards-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueAwardsTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() awards!: AwardDto[];

  @ViewChild('dt') dt: Table | undefined;

  teamTableColumns = [
    { field: 'id', header: 'Team Id', visible: true },
    { field: 'teamlogo', header: 'Current Logo', visible: true },
    { field: 'team_name', header: 'Name', visible: true },
    { field: 'divisions_id', header: 'Division', visible: true },
    { field: 'isactive', header: 'Is Active', visible: true },
    { field: 'users_id', header: 'User Id', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  mobileTeamTableColumns = [
    { field: 'teamlogo', header: 'Current Logo', visible: true },
    { field: 'team_name', header: 'Name', visible: true },
    { field: 'divisions_id', header: 'Division', visible: true },
    { field: 'isactive', header: 'Is Active', visible: true },
    { field: 'users_id', header: 'User Id', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'isactive';
  display = false;
  awardsForTable!: any;
  award!: AwardDto | null;

  ngOnInit(): void {
    this.awardsForTable = this.mapItems(this.awards);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(awards: AwardDto[]) {
    return awards.map((award: AwardDto) => ({
      ...award,
      // team_name: `${award.city} ${award.nickname}`,
      // teamlogo: this.getString(team.teamlogo),
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  onTeamClick(award: AwardDto) {
    this.award = award;
    this.display = true;
  }

  onAddClick() {
    this.award = null;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.award = null;
  }
}
