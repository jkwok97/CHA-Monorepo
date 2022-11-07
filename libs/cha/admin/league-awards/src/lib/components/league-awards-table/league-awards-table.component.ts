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

  tableColumns = [
    { field: 'id', header: 'Award Id', visible: true },
    { field: 'cha_season', header: 'Season', visible: true },
    { field: 'player', header: 'Player', visible: true },
    { field: 'award', header: 'Award', visible: true },
    { field: 'team', header: 'Team', visible: true },
    { field: 'user', header: 'User', visible: true },
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
      player: award.player_id
        ? `${award.player_id?.firstname} ${award.player_id?.lastname}`
        : null,
      award: `${award.award_type?.display_name}`,
      team: `${award.team_id?.city} ${award.team_id?.nickname}`,
      user: `${award.users_id?.firstname} ${award.users_id?.lastname}`,
    }));
  }

  onClick(award: AwardDto) {
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
