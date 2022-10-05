import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { PlayerMgmtInfoFacade } from '../../+state/player-mgmt-info.facade';
import { PlayerMgmtInfoAddSalaryFormComponent } from '../player-mgmt-info-add-salary-form';

@Component({
  selector: 'cha-admin-player-mgmt-info-add-salary',
  templateUrl: './player-mgmt-info-add-salary.component.html',
  styleUrls: ['./player-mgmt-info-add-salary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoAddSalaryComponent {
  @Input() isMobile!: boolean;

  @ViewChild(PlayerMgmtInfoAddSalaryFormComponent, { static: false })
  playerSalaryFormRef?: PlayerMgmtInfoAddSalaryFormComponent;

  player$: Observable<PlayerDto | null>;

  panelStyle = {
    width: '100%',
    height: '75vh',
  };

  constructor(
    private playerMgmtInfoFacade: PlayerMgmtInfoFacade,
    private router: Router
  ) {
    this.player$ = this.playerMgmtInfoFacade.player$;
  }

  onSave() {
    // const salary = {
    //   ...this.playerInfoFormRef?.form.value,
    //   isgoalie: this.playerInfoFormRef?.form.value.isgoalie
    //     ? this.playerInfoFormRef?.form.value.isgoalie
    //     : false,
    //   isdefense: this.playerInfoFormRef?.form.value.isdefense
    //     ? this.playerInfoFormRef?.form.value.isdefense
    //     : false,
    //   isforward: this.playerInfoFormRef?.form.value.isforward
    //     ? this.playerInfoFormRef?.form.value.isforward
    //     : false,
    //   isactive: this.playerInfoFormRef?.form.value.isactive
    //     ? this.playerInfoFormRef?.form.value.isactive
    //     : false,
    //   is_protected: this.playerInfoFormRef?.form.value.is_protected
    //     ? this.playerInfoFormRef?.form.value.is_protected
    //     : false,
    //   id: this.player ? this.player.id : null,
    // };
    // !this.editMode
    //   ? this.playerMgmtInfoFacade.addPlayer(player)
    //   : this.player
    //   ? this.playerMgmtInfoFacade.editPlayer(player)
    //   : null;
    // this.playerMgmtInfoFacade.isSaving$
    //   .pipe(
    //     untilDestroyed(this),
    //     filter((isSaving: boolean) => !isSaving)
    //   )
    //   .subscribe(() => this.router.navigateByUrl(`/players/info`));
    this.router.navigateByUrl(`/players/info`);
  }
}
