import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import { TeamDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'cha-front-rules-lottery',
  templateUrl: './rules-lottery.component.html',
  styleUrls: ['./rules-lottery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesLotteryComponent {
  background = 'assets/images/gretzky.jpg';
  backgroundColor!: string;

  isMobile$: Observable<boolean>;
  currentTeam$: Observable<TeamDto | undefined>;

  constructor(
    private displayFacade: DisplayFacade,
    private userTeamFacade: UserTeamFacade
  ) {
    this.isMobile$ = this.displayFacade.isMobile$;
    this.currentTeam$ = this.userTeamFacade.currentUserTeam$;

    this.currentTeam$
      .pipe(first())
      .subscribe((userTeam: TeamDto | undefined) => {
        if (userTeam) {
          this.backgroundColor = userTeam.teamcolor;
        }
      });
  }
}
