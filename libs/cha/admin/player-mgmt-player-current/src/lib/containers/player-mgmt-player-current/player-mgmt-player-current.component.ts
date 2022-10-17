import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatPlayerAllDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { PlayerMgmtPlayerCurrentFacade } from '../../+state/player-mgmt-player-current.facade';

@Component({
  selector: 'cha-admin-player-mgmt-player-current',
  templateUrl: './player-mgmt-player-current.component.html',
  styleUrls: ['./player-mgmt-player-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtPlayerCurrentComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  players$: Observable<StatPlayerAllDto[]>;

  isMobile!: boolean;

  constructor(
    private playerMgmtPlayerCurrentFacade: PlayerMgmtPlayerCurrentFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.playerMgmtPlayerCurrentFacade.isLoaded$;
    this.isLoading$ = this.playerMgmtPlayerCurrentFacade.isLoading$;
    this.players$ = this.playerMgmtPlayerCurrentFacade.players$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.playerMgmtPlayerCurrentFacade.getPlayers();
  }
}
