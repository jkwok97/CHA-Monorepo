import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ConferenceDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { LeagueConferencesFacade } from '../../+state/league-conferences.facade';
import { LeagueConferencesEditFormComponent } from '../league-conferences-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-league-conferences-edit',
  templateUrl: './league-conferences-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueConferencesEditComponent implements OnInit {
  @Input() conference!: ConferenceDto | null;
  @Input() isMobile!: boolean;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(LeagueConferencesEditFormComponent, { static: false })
  conferenceFormRef?: LeagueConferencesEditFormComponent;

  editMode = false;
  panelStyle = {
    width: '100%',
    height: '65vh',
  };

  constructor(private leagueConferencesFacade: LeagueConferencesFacade) {}

  ngOnInit(): void {
    this.conference ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const conference = {
      ...this.conferenceFormRef?.form.value,
      isactive: this.conferenceFormRef?.form.value.isactive
        ? this.conferenceFormRef?.form.value.isactive
        : false,
      id: this.conference ? this.conference.id : null,
    };

    !this.editMode
      ? this.leagueConferencesFacade.addConference(conference)
      : this.conference
      ? this.leagueConferencesFacade.editConference(conference)
      : null;

    this.leagueConferencesFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }

  onDelete() {
    if (this.conference) {
      this.leagueConferencesFacade.deleteConference(this.conference.id);

      this.leagueConferencesFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
