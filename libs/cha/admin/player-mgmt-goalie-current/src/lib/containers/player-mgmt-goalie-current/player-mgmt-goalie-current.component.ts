import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatGoalieAllDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { PlayerMgmtGoalieCurrentFacade } from '../../+state/player-mgmt-goalie-current.facade';

@Component({
  selector: 'cha-admin-player-mgmt-goalie-current',
  templateUrl: './player-mgmt-goalie-current.component.html',
  styleUrls: ['./player-mgmt-goalie-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtGoalieCurrentComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  goalies$: Observable<StatGoalieAllDto[]>;

  isMobile!: boolean;

  constructor(
    private playerMgmtGoalieCurrentFacade: PlayerMgmtGoalieCurrentFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.playerMgmtGoalieCurrentFacade.isLoaded$;
    this.isLoading$ = this.playerMgmtGoalieCurrentFacade.isLoading$;
    this.goalies$ = this.playerMgmtGoalieCurrentFacade.goalies$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.playerMgmtGoalieCurrentFacade.getGoalies();
  }
}
