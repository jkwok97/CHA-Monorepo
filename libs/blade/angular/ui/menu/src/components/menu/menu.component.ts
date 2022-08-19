import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'blade-menu',
  standalone: true,
  imports: [CommonModule, MenubarModule, TabViewModule],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() items: MenuItem[] = [];
  @Input() logo: TemplateRef<void> | undefined;
  @Input() isMobile: boolean | null = false;
}
