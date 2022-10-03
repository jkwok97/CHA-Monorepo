import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TeamDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-admin-league-teams-edit',
  templateUrl: './league-teams-edit.component.html',
  styleUrls: ['./league-teams-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsEditComponent implements OnInit {
  @Input() team!: TeamDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
