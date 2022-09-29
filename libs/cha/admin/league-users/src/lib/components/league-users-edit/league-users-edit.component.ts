import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
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

  @Output() closeSidebar = new EventEmitter<boolean>();

  editMode = false;

  constructor() {}

  ngOnInit(): void {
    this.user ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    console.log('clicked');
    // this.closeSidebar.emit(true);
  }

  onDelete() {
    console.log('clicked');
    // this.closeSidebar.emit(true);
  }
}
