import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { first } from 'rxjs';

@Component({
  selector: 'cha-admin-player-mgmt-info-add-info',
  templateUrl: './player-mgmt-info-add-info.component.html',
  styleUrls: ['./player-mgmt-info-add-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoAddInfoComponent {
  isMobile!: boolean;

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }
}
