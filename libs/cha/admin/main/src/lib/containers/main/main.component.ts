import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { mainMenuItems } from './main-menu-items';

@Component({
  selector: 'cha-admin-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  items: MenuItem[] = mainMenuItems;
}
