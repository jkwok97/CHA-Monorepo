import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DraftTableDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { DraftMgmtTableFacade } from '../../+state/draft-mgmt-table.facade';
import { DraftMgmtTableEditFormComponent } from '../draft-mgmt-table-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-draft-mgmt-table-edit',
  templateUrl: './draft-mgmt-table-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtTableEditComponent {
  @Input() draftTableItem!: DraftTableDto | null;
  @Input() isMobile!: boolean;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(DraftMgmtTableEditFormComponent, { static: false })
  draftTableFormRef?: DraftMgmtTableEditFormComponent;

  panelStyle = {
    width: '100%',
    height: '65vh',
  };

  constructor(private draftMgmtTableFacade: DraftMgmtTableFacade) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const pick = {
      ...this.draftTableFormRef?.form.value,
      id: this.draftTableItem?.id,
    };

    console.log(pick);

    this.draftMgmtTableFacade.editPick(pick);

    this.draftMgmtTableFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => {
        this.closeSidebar.emit(true);
      });
  }
}
