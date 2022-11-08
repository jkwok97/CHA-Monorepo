import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AwardDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { LeagueAwardsFacade } from '../../+state/league-awards.facade';
import { LeagueAwardsEditFormComponent } from '../league-awards-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-league-awards-edit',
  templateUrl: './league-awards-edit.component.html',
  styleUrls: ['./league-awards-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueAwardsEditComponent implements OnInit {
  @Input() award!: AwardDto | null;
  @Input() isMobile!: boolean;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(LeagueAwardsEditFormComponent, { static: false })
  awardFormRef?: LeagueAwardsEditFormComponent;

  editMode = false;
  panelStyle = {
    width: '100%',
    height: '65vh',
  };

  constructor(private leagueAwardsFacade: LeagueAwardsFacade) {}

  ngOnInit(): void {
    this.award ? (this.editMode = true) : (this.editMode = false);
  }

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const award = {
      ...this.awardFormRef?.form.value,
      id: this.award ? this.award.id : null,
    };

    !this.editMode
      ? this.leagueAwardsFacade.addAward(award)
      : this.award
      ? this.leagueAwardsFacade.editAward(award)
      : null;

    this.leagueAwardsFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }

  onDelete() {
    if (this.award) {
      this.leagueAwardsFacade.deleteAward(this.award.id);

      this.leagueAwardsFacade.isSaving$
        .pipe(
          untilDestroyed(this),
          filter((isSaving: boolean) => !isSaving)
        )
        .subscribe(() => this.closeSidebar.emit(true));
    }
  }
}
