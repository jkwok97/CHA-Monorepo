import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TeamDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-admin-league-teams-table',
  templateUrl: './league-teams-table.component.html',
  styleUrls: ['./league-teams-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() teams!: TeamDto[];

  constructor() {}

  ngOnInit(): void {}
}
