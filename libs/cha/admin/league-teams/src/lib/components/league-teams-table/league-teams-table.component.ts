import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TeamDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-league-teams-table',
  templateUrl: './league-teams-table.component.html',
  styleUrls: ['./league-teams-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() teams!: TeamDto[];

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
  teamsForTable!: any;
  team!: TeamDto | null;

  ngOnInit(): void {
    this.teamsForTable = this.mapItems(this.teams);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(teams: TeamDto[]) {
    return teams.map((team: TeamDto) => ({
      ...team,
      team_name: `${team.city} ${team.nickname}`,
      teamlogo: this.getString(team.teamlogo),
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  onTeamClick(team: TeamDto) {
    this.team = team;
    this.display = true;
  }

  onAddClick() {
    this.team = null;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.team = null;
  }
}
