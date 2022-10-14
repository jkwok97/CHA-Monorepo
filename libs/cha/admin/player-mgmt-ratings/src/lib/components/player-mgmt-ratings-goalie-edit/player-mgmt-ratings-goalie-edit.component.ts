import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { GoalieRatingDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { PlayerMgmtRatingsFacade } from '../../+state/player-mgmt-ratings.facade';
import { PlayerMgmtRatingsGoalieEditFormComponent } from '../player-mgmt-ratings-goalie-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-player-mgmt-ratings-goalie-edit',
  templateUrl: './player-mgmt-ratings-goalie-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsGoalieEditComponent {
  @Input() goalie!: GoalieRatingDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(PlayerMgmtRatingsGoalieEditFormComponent, { static: false })
  ratingFormRef?: PlayerMgmtRatingsGoalieEditFormComponent;

  constructor(private playerMgmtRatingsFacade: PlayerMgmtRatingsFacade) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const goalie = {
      id: this.goalie?.id,
      ...this.ratingFormRef?.form.value,
    };

    this.playerMgmtRatingsFacade.editGoalie(goalie);

    this.playerMgmtRatingsFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }
}
