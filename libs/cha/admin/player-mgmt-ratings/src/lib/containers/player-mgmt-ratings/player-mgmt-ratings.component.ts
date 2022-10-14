import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { GoalieRatingDto, PlayerRatingDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { PlayerMgmtRatingsFacade } from '../../+state/player-mgmt-ratings.facade';

@Component({
  selector: 'cha-admin-player-mgmt-ratings',
  templateUrl: './player-mgmt-ratings.component.html',
  styleUrls: ['./player-mgmt-ratings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  players$: Observable<PlayerRatingDto[]>;
  goalies$: Observable<GoalieRatingDto[]>;

  isMobile!: boolean;

  constructor(
    private playerMgmtRatingsFacade: PlayerMgmtRatingsFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.playerMgmtRatingsFacade.isLoaded$;
    this.isLoading$ = this.playerMgmtRatingsFacade.isLoading$;
    this.players$ = this.playerMgmtRatingsFacade.players$;
    this.goalies$ = this.playerMgmtRatingsFacade.goalies$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.playerMgmtRatingsFacade.getPlayers();
    this.playerMgmtRatingsFacade.getGoalies();
  }
}
