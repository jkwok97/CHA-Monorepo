import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DraftPickDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { DraftMgmtEntryFacade } from '../../+state/draft-mgmt-entry.facade';
import { DraftMgmtEntryEditFormComponent } from '../draft-mgmt-entry-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-draft-mgmt-entry-edit',
  templateUrl: './draft-mgmt-entry-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtEntryEditComponent implements OnInit {
  @Input() pick!: DraftPickDto | null;
  @Input() isMobile!: boolean;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(DraftMgmtEntryEditFormComponent, { static: false })
  draftPickFormRef?: DraftMgmtEntryEditFormComponent;

  editMode = false;
  panelStyle = {
    width: '100%',
    height: '65vh',
  };

  constructor(private draftMgmtEntryFacade: DraftMgmtEntryFacade) {}

  ngOnInit(): void {
    this.pick ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const pick = {
      ...this.draftPickFormRef?.form.value,
      id: this.pick?.id,
    };

    !this.editMode
      ? this.draftMgmtEntryFacade.addPick(pick)
      : this.pick
      ? this.draftMgmtEntryFacade.editPick(pick)
      : null;

    this.draftMgmtEntryFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => {
        this.closeSidebar.emit(true);
      });
  }

  onDelete() {
    if (this.pick) {
      this.draftMgmtEntryFacade.deletePick(this.pick.id);

      this.draftMgmtEntryFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
