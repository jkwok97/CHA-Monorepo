import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import { TeamDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';

@Component({
  selector: 'cha-front-rules-egr',
  templateUrl: './rules-egr.component.html',
  styleUrls: ['./rules-egr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesEgrComponent {
  background = 'assets/images/brodeur.jpg';
  backgroundColor!: string;
  textColor!: string;

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
          this.textColor = userTeam.teamtextcolor;
        }
      });
  }
}
