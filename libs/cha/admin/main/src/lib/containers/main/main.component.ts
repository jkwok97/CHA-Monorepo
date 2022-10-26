import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { mainMenuItems } from './main-menu-items';

@Component({
  selector: 'cha-admin-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  items: MenuItem[] = mainMenuItems;

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
