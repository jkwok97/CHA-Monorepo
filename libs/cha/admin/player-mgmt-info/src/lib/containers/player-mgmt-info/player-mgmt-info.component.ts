import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { PlayerDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { PlayerMgmtInfoFacade } from '../../+state/player-mgmt-info.facade';

@Component({
  selector: 'cha-admin-player-mgmt-info',
  templateUrl: './player-mgmt-info.component.html',
  styleUrls: ['./player-mgmt-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  players$: Observable<PlayerDto[]>;

  isMobile!: boolean;

  constructor(
    private playerMgmtInfoFacade: PlayerMgmtInfoFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.playerMgmtInfoFacade.isLoaded$;
    this.isLoading$ = this.playerMgmtInfoFacade.isLoading$;
    this.players$ = this.playerMgmtInfoFacade.players$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.playerMgmtInfoFacade.getPlayers();
  }
}
