import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { StatPlayerAllDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { PlayerMgmtPlayerCurrentFacade } from '../../+state/player-mgmt-player-current.facade';
import { PlayerMgmtPlayerCurrentEditFormComponent } from '../player-mgmt-player-current-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-player-mgmt-player-current-edit',
  templateUrl: './player-mgmt-player-current-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtPlayerCurrentEditComponent {
  @Input() player!: StatPlayerAllDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(PlayerMgmtPlayerCurrentEditFormComponent, { static: false })
  playerFormRef?: PlayerMgmtPlayerCurrentEditFormComponent;

  constructor(
    private playerMgmtPlayerCurrentFacade: PlayerMgmtPlayerCurrentFacade
  ) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const player = {
      ...this.playerFormRef?.model,
    };

    console.log(player);

    // this.playerMgmtPlayerCurrentFacade.editPlayer(player);

    // this.playerMgmtPlayerCurrentFacade.isSaving$
    //   .pipe(
    //     untilDestroyed(this),
    //     filter((isSaving: boolean) => !isSaving)
    //   )
    //   .subscribe(() => this.closeSidebar.emit(true));
  }

  onDelete() {
    if (this.player) {
      this.playerMgmtPlayerCurrentFacade.deletePlayer(this.player.player_id.id);

      this.playerMgmtPlayerCurrentFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
