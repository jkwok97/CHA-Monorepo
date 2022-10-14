import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PlayerRatingDto } from '@cha/shared/entities';
import { UntilDestroy } from '@ngneat/until-destroy';
import { PlayerMgmtRatingsFacade } from '../../+state/player-mgmt-ratings.facade';
import { PlayerMgmtRatingsPlayerEditFormComponent } from '../player-mgmt-ratings-player-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-player-mgmt-ratings-player-edit',
  templateUrl: './player-mgmt-ratings-player-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsPlayerEditComponent {
  @Input() player!: PlayerRatingDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(PlayerMgmtRatingsPlayerEditFormComponent, { static: false })
  ratingFormRef?: PlayerMgmtRatingsPlayerEditFormComponent;

  constructor(private playerMgmtRatingsFacade: PlayerMgmtRatingsFacade) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    // const salary = {
    //   id: this.salary?.id,
    //   ...this.salaryFormRef?.form.value,
    // };
    // this.playerMgmtSalariesFacade.editSalary(salary);
    // this.playerMgmtSalariesFacade.isSaving$
    //   .pipe(
    //     untilDestroyed(this),
    //     filter((isSaving: boolean) => !isSaving)
    //   )
    //   .subscribe(() => this.closeSidebar.emit(true));
  }
}
