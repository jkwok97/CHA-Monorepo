import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { StatGoalieAllDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { PlayerMgmtGoalieCurrentFacade } from '../../+state/player-mgmt-goalie-current.facade';
import { PlayerMgmtGoalieCurrentEditFormComponent } from '../player-mgmt-goalie-current-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-player-mgmt-goalie-current-edit',
  templateUrl: './player-mgmt-goalie-current-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtGoalieCurrentEditComponent {
  @Input() goalie!: StatGoalieAllDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(PlayerMgmtGoalieCurrentEditFormComponent, { static: false })
  playerFormRef?: PlayerMgmtGoalieCurrentEditFormComponent;

  constructor(
    private playerMgmtGoalieCurrentFacade: PlayerMgmtGoalieCurrentFacade
  ) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const player = {
      ...this.playerFormRef?.model,
    };

    this.playerMgmtGoalieCurrentFacade.editGoalie(player);

    this.playerMgmtGoalieCurrentFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }

  onDelete() {
    if (this.goalie) {
      this.playerMgmtGoalieCurrentFacade.deleteGoalie(this.goalie.player_id.id);

      this.playerMgmtGoalieCurrentFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
