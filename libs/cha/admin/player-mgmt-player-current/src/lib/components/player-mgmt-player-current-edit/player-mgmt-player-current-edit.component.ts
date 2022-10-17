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
  styleUrls: ['./player-mgmt-player-current-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtPlayerCurrentEditComponent implements OnInit {
  @Input() player!: StatPlayerAllDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(PlayerMgmtPlayerCurrentEditFormComponent, { static: false })
  playerFormRef?: PlayerMgmtPlayerCurrentEditFormComponent;

  editMode = false;

  constructor(
    private playerMgmtPlayerCurrentFacade: PlayerMgmtPlayerCurrentFacade
  ) {}

  ngOnInit(): void {
    this.player ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const player = {
      ...this.playerFormRef?.form.value,
      isadmin: this.playerFormRef?.form.value.isadmin
        ? this.playerFormRef?.form.value.isadmin
        : false,
      isactive: this.playerFormRef?.form.value.isactive
        ? this.playerFormRef?.form.value.isactive
        : false,
    };

    !this.editMode
      ? this.playerMgmtPlayerCurrentFacade.addPlayer(player)
      : this.player
      ? this.playerMgmtPlayerCurrentFacade.editPlayer(player)
      : null;

    this.playerMgmtPlayerCurrentFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
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
