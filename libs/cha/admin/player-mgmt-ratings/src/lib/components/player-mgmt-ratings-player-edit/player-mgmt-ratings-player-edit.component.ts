import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PlayerRatingDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
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
    const player = {
      id: this.player?.id,
      ...this.ratingFormRef?.form.value,
    };
    this.playerMgmtRatingsFacade.editPlayer(player);
    this.playerMgmtRatingsFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }

  onDelete() {
    if (this.player && this.player.id) {
      this.playerMgmtRatingsFacade.deletePlayerRating(this.player.id);

      this.playerMgmtRatingsFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
