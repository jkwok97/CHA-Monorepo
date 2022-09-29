import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { UserDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { LeagueUsersFacade } from '../../+state/league-users.facade';
import { LeagueUsersEditFormComponent } from '../league-users-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-league-users-edit',
  templateUrl: './league-users-edit.component.html',
  styleUrls: ['./league-users-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueUsersEditComponent implements OnInit {
  @Input() user!: UserDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(LeagueUsersEditFormComponent, { static: false })
  userFormRef?: LeagueUsersEditFormComponent;

  editMode = false;

  constructor(private leagueUsersFacade: LeagueUsersFacade) {}

  ngOnInit(): void {
    this.user ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const user = this.userFormRef?.form.value;
    this.editMode
      ? this.leagueUsersFacade.editUser(user)
      : this.leagueUsersFacade.addUser(user);

    this.leagueUsersFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }

  onDelete() {
    if (this.user) {
      this.leagueUsersFacade.deleteUser(this.user.id);

      this.leagueUsersFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
