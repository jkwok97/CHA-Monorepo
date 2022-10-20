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
  teamFormRef?: LeagueTeamsEditFormComponent;

  editMode = false;
  panelStyle = {
    width: '100%',
    height: '65vh',
  };

  constructor(private leagueTeamsFacade: LeagueTeamsFacade) {}

  ngOnInit(): void {
    this.team ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const team = {
      ...this.teamFormRef?.form.value,
      isadmin: this.teamFormRef?.form.value.isadmin
        ? this.teamFormRef?.form.value.isadmin
        : false,
      isactive: this.teamFormRef?.form.value.isactive
        ? this.teamFormRef?.form.value.isactive
        : false,
      id: this.team ? this.team.id : null,
    };

    !this.editMode
      ? this.leagueTeamsFacade.addTeam(team)
      : this.team
      ? this.leagueTeamsFacade.editTeam(team)
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
