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
  styleUrls: ['./schedule-games-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleGamesEditComponent {
  @Input() game!: ScheduleAllDto | null;
  @Input() isMobile!: boolean;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(ScheduleGamesEditFormComponent, { static: false })
  gameFormRef?: ScheduleGamesEditFormComponent;

  panelStyle = {
    width: '100%',
    height: '65vh',
  };

  constructor(private scheduleGamesFacade: ScheduleGamesFacade) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    // const game = {
    // };
    // this.scheduleGamesFacade.saveGame(game);
    // this.scheduleGamesFacade.isSaving$
    //   .pipe(
    //     untilDestroyed(this),
    //     filter((isSaving: boolean) => !isSaving)
    //   )
    //   .subscribe(() => {
    //     this.closeSidebar.emit(true);
    //   });
  }
}
