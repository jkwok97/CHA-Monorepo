import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { SalaryAllDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { PlayerMgmtSalariesFacade } from '../../+state/player-mgmt-salaries.facade';
import { PlayerMgmtSalariesEditFormComponent } from '../player-mgmt-salaries-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-player-mgmt-salaries-edit',
  templateUrl: './player-mgmt-salaries-edit.component.html',
  styleUrls: ['./player-mgmt-salaries-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesEditComponent {
  @Input() salary!: SalaryAllDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(PlayerMgmtSalariesEditFormComponent, { static: false })
  salaryFormRef?: PlayerMgmtSalariesEditFormComponent;

  constructor(private playerMgmtSalariesFacade: PlayerMgmtSalariesFacade) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const salary = {
      id: this.salary?.id,
      ...this.salaryFormRef?.form.value,
    };

    this.playerMgmtSalariesFacade.editSalary(salary);

    this.playerMgmtSalariesFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }
}
