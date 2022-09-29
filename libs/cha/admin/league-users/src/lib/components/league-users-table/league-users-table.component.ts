import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-admin-league-users-table',
  templateUrl: './league-users-table.component.html',
  styleUrls: ['./league-users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueUsersTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() users!: UserDto[];

  @ViewChild('dt') dt: Table | undefined;

  userTableColumns = [
    { field: 'id', header: 'User Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'email', header: 'Email', visible: true },
    { field: 'isactive', header: 'Is Active', visible: true },
    { field: 'isadmin', header: 'Is Admin', visible: true },
  ];

  mobileUserTableColumns = [
    { field: 'id', header: 'User Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'email', header: 'Email', visible: true },
    { field: 'isactive', header: 'Is Active', visible: true },
    { field: 'isadmin', header: 'Is Admin', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'isactive';
  statsForTable!: any;
  display = false;
  usersForTable!: any;
  user!: UserDto | null;

  constructor() {}

  ngOnInit(): void {
    this.usersForTable = this.mapItems(this.users);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(users: UserDto[]) {
    return users.map((user: UserDto) => ({
      ...user,
      full_name: `${user.firstname} ${user.lastname}`,
    }));
  }

  onUserClick(user: UserDto) {
    console.log(user);
    this.user = user;
    this.display = true;
  }

  onAddClick() {
    this.user = null;
    console.log('clicked');
    this.display = true;
  }
}
