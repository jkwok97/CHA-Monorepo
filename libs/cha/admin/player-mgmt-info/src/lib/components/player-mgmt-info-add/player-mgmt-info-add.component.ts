import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cha-admin-player-mgmt-info-add',
  templateUrl: './player-mgmt-info-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoAddComponent {
  items: MenuItem[] = [{ label: 'Player Info', routerLink: 'info' }, { label: 'Salaries', routerLink: 'salary' }];
}
