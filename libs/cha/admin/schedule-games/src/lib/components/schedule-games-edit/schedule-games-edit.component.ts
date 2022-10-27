import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ScheduleAllDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { ScheduleGamesFacade } from '../../+state/schedule-games.facade';
import { ScheduleGamesEditFormComponent } from '../schedule-games-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-schedule-games-edit',
  templateUrl: './schedule-games-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleGamesEditComponent {
  @Input() game!: ScheduleAllDto | null;
  @Input() isMobile!: boolean;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(ScheduleGamesEditFormComponent, { static: false })
  gameFormRef?: ScheduleGamesEditFormComponent;

  constructor(private scheduleGamesFacade: ScheduleGamesFacade) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const game = {
      ...this.game,
      vis_team_score: this.gameFormRef?.form.value.vis_team_score,
      home_team_score: this.gameFormRef?.form.value.home_team_score
    };

    this.scheduleGamesFacade.saveGame(game);

    this.scheduleGamesFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => {
        this.closeSidebar.emit(true);
      });
  }
}
