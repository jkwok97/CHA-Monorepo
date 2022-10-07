import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { SalaryAllDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { PlayerMgmtSalariesFacade } from '../../+state/player-mgmt-salaries.facade';

@Component({
  selector: 'cha-admin-player-mgmt-salaries',
  templateUrl: './player-mgmt-salaries.component.html',
  styleUrls: ['./player-mgmt-salaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  salaries$: Observable<SalaryAllDto[]>;

  isMobile!: boolean;

  constructor(
    private playerMgmtSalariesFacade: PlayerMgmtSalariesFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.playerMgmtSalariesFacade.isLoaded$;
    this.isLoading$ = this.playerMgmtSalariesFacade.isLoading$;
    this.salaries$ = this.playerMgmtSalariesFacade.salaries$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.playerMgmtSalariesFacade.getSalaries();
  }
}
