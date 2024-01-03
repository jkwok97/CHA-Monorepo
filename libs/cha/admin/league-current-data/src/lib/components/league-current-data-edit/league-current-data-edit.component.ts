import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { LeagueDataDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LeagueCurrentDataEditFormComponent } from '../league-current-data-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-league-current-data-edit',
  templateUrl: './league-current-data-edit.component.html',
  styleUrls: ['./league-current-data-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueCurrentDataEditComponent {
  @Input() data!: LeagueDataDto | null;

  @ViewChild(LeagueCurrentDataEditFormComponent, { static: false })
  dataFormRef?: LeagueCurrentDataEditFormComponent;

  isSaving = false;

  constructor(private leagueDataFacade: LeagueDataFacade) {}

  onSave() {
    const data = {
      ...this.dataFormRef?.form.value,
      offseason: this.dataFormRef?.form.value.offseason
        ? this.dataFormRef?.form.value.offseason
        : false,
    };

    this.leagueDataFacade.editData(data);

    this.leagueDataFacade.isSaving$
      .pipe(untilDestroyed(this))
      .subscribe((isSaving: boolean) => (this.isSaving = isSaving));
  }
}
