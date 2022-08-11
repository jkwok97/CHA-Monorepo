import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import { TeamDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';

@Component({
  selector: 'cha-front-rules-equalization',
  templateUrl: './rules-equalization.component.html',
  styleUrls: ['./rules-equalization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesEqualizationComponent {
  background = 'assets/images/howe.jpg';
  backgroundColor = '';

  isMobile$: Observable<boolean>;

  constructor(
    private displayFacade: DisplayFacade,
    private userTeamFacade: UserTeamFacade
  ) {
    this.isMobile$ = this.displayFacade.isMobile$;

    this.userTeamFacade.currentUserTeam$
      .pipe(first())
      .subscribe((userTeam: TeamDto | undefined) => {
        if (userTeam) {
          this.backgroundColor = userTeam.teamcolor;
        }
      });
  }
}
