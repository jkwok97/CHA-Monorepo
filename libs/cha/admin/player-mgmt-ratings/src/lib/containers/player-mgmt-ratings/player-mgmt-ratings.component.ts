import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { GoalieRatingDto, PlayerRatingDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { PlayerMgmtRatingsFacade } from '../../+state/player-mgmt-ratings.facade';

@Component({
  selector: 'cha-admin-player-mgmt-ratings',
  templateUrl: './player-mgmt-ratings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  players$: Observable<PlayerRatingDto[]>;
  goalies$: Observable<GoalieRatingDto[]>;

  selectOptions = [
    { label: 'Skaters', value: 'skater' },
    { label: 'Goalies', value: 'goalie' },
  ];

  showSkaters = true;
  showGoalies = false;
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
  }

  ngOnInit(): void {
    this.playerMgmtRatingsFacade.getPlayers();
    this.playerMgmtRatingsFacade.getGoalies();
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'skater':
        this.setSkaters();
        break;
      case 'goalie':
        this.setGoalies();
        break;
      default:
        return;
    }
  }

  setSkaters() {
    this.showSkaters = true;
    this.showGoalies = false;
  }

  setGoalies() {
    this.showSkaters = false;
    this.showGoalies = true;
  }
}
