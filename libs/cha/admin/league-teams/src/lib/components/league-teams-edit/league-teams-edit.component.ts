import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TeamDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { LeagueTeamsFacade } from '../../+state/league-teams.facade';
import { LeagueTeamsEditFormComponent } from '../league-teams-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-league-teams-edit',
  templateUrl: './league-teams-edit.component.html',
  styleUrls: ['./league-teams-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsEditComponent implements OnInit {
  @Input() team!: TeamDto | null;
  @Input() isMobile!: boolean;
  
  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(LeagueTeamsEditFormComponent, { static: false })
  userFormRef?: LeagueTeamsEditFormComponent;

  editMode = false;
  panelStyle = {
    width: '100%',
    height: '75vh',
  };

  constructor(private leagueTeamsFacade: LeagueTeamsFacade) {}

  ngOnInit(): void {
    this.team ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const user = {
      ...this.userFormRef?.form.value,
      isadmin: this.userFormRef?.form.value.isadmin
        ? this.userFormRef?.form.value.isadmin
        : false,
      isactive: this.userFormRef?.form.value.isactive
        ? this.userFormRef?.form.value.isactive
        : false,
    };

    !this.editMode
      ? this.leagueTeamsFacade.addTeam(user)
      : this.team
      ? this.leagueTeamsFacade.editTeam(user)
      : null;

    this.leagueTeamsFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }

  onDelete() {
    if (this.team) {
      this.leagueTeamsFacade.deleteTeam(this.team.id);

      this.leagueTeamsFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
