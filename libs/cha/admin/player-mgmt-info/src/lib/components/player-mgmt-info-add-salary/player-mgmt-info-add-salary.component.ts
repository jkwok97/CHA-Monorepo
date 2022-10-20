import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, Observable } from 'rxjs';
import { PlayerMgmtInfoFacade } from '../../+state/player-mgmt-info.facade';
import { PlayerMgmtInfoAddSalaryFormComponent } from '../player-mgmt-info-add-salary-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-player-mgmt-info-add-salary',
  templateUrl: './player-mgmt-info-add-salary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoAddSalaryComponent {
  @Input() isMobile!: boolean;

  @ViewChild(PlayerMgmtInfoAddSalaryFormComponent, { static: false })
  playerSalaryFormRef?: PlayerMgmtInfoAddSalaryFormComponent;

  player$: Observable<PlayerDto | null>;

  panelStyle = {
    width: '100%',
    height: '65vh',
  };

  constructor(
    private playerMgmtInfoFacade: PlayerMgmtInfoFacade,
    private router: Router
  ) {
    this.player$ = this.playerMgmtInfoFacade.player$;
  }

  onSave() {
    const salary = {
      ...this.playerSalaryFormRef?.form.value,
    };

    this.playerMgmtInfoFacade.addSalary(salary);

    this.playerMgmtInfoFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.router.navigateByUrl(`/players/info`));
  }
}
