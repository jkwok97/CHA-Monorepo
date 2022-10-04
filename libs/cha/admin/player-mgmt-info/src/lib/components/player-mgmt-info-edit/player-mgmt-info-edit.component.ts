import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { PlayerDto } from '@cha/shared/entities';
import { untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { PlayerMgmtInfoFacade } from '../../+state/player-mgmt-info.facade';
import { PlayerMgmtInfoEditFormComponent } from '../player-mgmt-info-edit-form';

@Component({
  selector: 'cha-admin-player-mgmt-info-edit',
  templateUrl: './player-mgmt-info-edit.component.html',
  styleUrls: ['./player-mgmt-info-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoEditComponent implements OnInit {
  @Input() player!: PlayerDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(PlayerMgmtInfoEditFormComponent, { static: false })
  playerInfoFormRef?: PlayerMgmtInfoEditFormComponent;

  editMode = false;

  constructor(private playerMgmtInfoFacade: PlayerMgmtInfoFacade) {}

  ngOnInit(): void {
    this.player ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const player = {
      ...this.playerInfoFormRef?.form.value,
      isgoalie: this.playerInfoFormRef?.form.value.isgoalie
        ? this.playerInfoFormRef?.form.value.isgoalie
        : false,
      isdefense: this.playerInfoFormRef?.form.value.isdefense
        ? this.playerInfoFormRef?.form.value.isdefense
        : false,
      isforward: this.playerInfoFormRef?.form.value.isforward
        ? this.playerInfoFormRef?.form.value.isforward
        : false,
      isactive: this.playerInfoFormRef?.form.value.isactive
        ? this.playerInfoFormRef?.form.value.isactive
        : false,
      id: this.player ? this.player.id : null,
    };

    !this.editMode
      ? this.playerMgmtInfoFacade.addPlayer(player)
      : this.player
      ? this.playerMgmtInfoFacade.editPlayer(player)
      : null;

    this.playerMgmtInfoFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }

  onDelete() {
    if (this.player) {
      this.playerMgmtInfoFacade.deletePlayer(this.player.id);

      this.playerMgmtInfoFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
