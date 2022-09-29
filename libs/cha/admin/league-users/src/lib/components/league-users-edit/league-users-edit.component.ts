import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-admin-league-users-edit',
  templateUrl: './league-users-edit.component.html',
  styleUrls: ['./league-users-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueUsersEditComponent implements OnInit {
  @Input() user!: UserDto | null;

  editMode = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.user);
  }

}
