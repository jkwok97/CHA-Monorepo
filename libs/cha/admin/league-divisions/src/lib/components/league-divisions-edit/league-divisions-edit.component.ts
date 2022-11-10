import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { GetDivisionDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { LeagueDivisionsFacade } from '../../+state/league-divisions.facade';
import { LeagueDivisionsEditFormComponent } from '../league-divisions-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-league-divisions-edit',
  templateUrl: './league-divisions-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsEditComponent implements OnInit {
  @Input() division!: GetDivisionDto | null;
  @Input() isMobile!: boolean;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(LeagueDivisionsEditFormComponent, { static: false })
  divisionFormRef?: LeagueDivisionsEditFormComponent;

  editMode = false;
  panelStyle = {
    width: '100%',
    height: '65vh',
  };

  constructor(private leagueDivisionsFacade: LeagueDivisionsFacade) {}

  ngOnInit(): void {
    this.division ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const division = {
      ...this.divisionFormRef?.form.value,
      isactive: this.divisionFormRef?.form.value.isactive
        ? this.divisionFormRef?.form.value.isactive
        : false,
      id: this.division ? this.division.id : null,
    };

    !this.editMode
      ? this.leagueDivisionsFacade.addDivision(division)
      : this.division
      ? this.leagueDivisionsFacade.editDivision(division)
      : null;

    this.leagueDivisionsFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }

  onDelete() {
    if (this.division) {
      this.leagueDivisionsFacade.deleteDivision(this.division.id);

      this.leagueDivisionsFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
