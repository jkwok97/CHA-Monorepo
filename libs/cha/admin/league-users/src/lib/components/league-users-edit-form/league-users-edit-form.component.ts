import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-admin-league-users-edit-form',
  templateUrl: './league-users-edit-form.component.html',
  styleUrls: ['./league-users-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueUsersEditFormComponent implements OnInit {
  @Input() user!: UserDto | null;
  constructor() {}

  ngOnInit(): void {
    console.log(this.user);
  }
}
