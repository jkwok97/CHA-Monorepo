import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';

import { Router } from '@angular/router';
import { bladeMultiLevelMenuAnimations } from '../../animations';
import { BladeMultiLevelNav, BladeNavListItemModel } from '../../models';

@Component({
  selector: 'blade-multi-level-main-menu',
  templateUrl: './multi-level-main-menu.component.html',
  styleUrl: './multi-level-main-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [bladeMultiLevelMenuAnimations.fadeInOut]
})
export class MultiLevelMainMenuComponent {
  _title!: string;
  selectedMenuItem!: BladeNavListItemModel;
  isCollapsed = false;
  iconToShow: string | undefined;

  @Input() customHeightClassName? = '';
  @Input() footerTmpl!: TemplateRef<void>;
  @Input() menuList!: BladeNavListItemModel[];
  @Input() menuItemList!: BladeMultiLevelNav[];
  @Input() level!: number;
  @Input() zIndex!: number;
  @Input() showMenu!: boolean;
  @Input() numberOfItemsToShow!: number;
  @Input() showMobileMenu = false;
  @Input() set title(value: string | undefined) {
    if (value) {
      this._title = value;
    }
    this.setInitialIcon();
  }
  @Input() logo?: string;
  @Input() inSubMenu!: boolean;

  @Output() menuItemClicked = new EventEmitter<BladeNavListItemModel>();
  @Output() navigateBackByIcon = new EventEmitter<{
    menuItems: BladeNavListItemModel[];
    level: number;
  }>();
  @Output() navigateBackByName = new EventEmitter<{
    menuItems: BladeNavListItemModel[];
    level: number;
  }>();
  @Output() currentSubMenu = new EventEmitter<BladeNavListItemModel>();
  @Output() titleChanged = new EventEmitter<string>();
  @Output() isMenuCollapsed = new EventEmitter<boolean>();

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  private setInitialIcon(): void {
    if (!this.menuItemList) return;
    this.iconToShow = this.menuItemList.filter(
      (item) => item.level === this.level
    )[0].icon;

    this.cdr.markForCheck();
  }

  routeToLink(menuItem: BladeNavListItemModel): void {
    if (menuItem.routerLink) {
      this.router.navigate(menuItem.routerLink, {
        state: {
          fromInsideMenu: true
        }
      });
    }
  }

  onSubMenuItemClicked(subMenuItemClicked: BladeNavListItemModel): void {
    this.setInitialIcon();

    this.selectedMenuItem = subMenuItemClicked;

    this.menuItemClicked.emit(subMenuItemClicked);

    if (subMenuItemClicked.routerLink) {
      this.routeToLink(subMenuItemClicked);
      this.inSubMenu = true;
      this.currentSubMenu.emit(subMenuItemClicked);
    }
  }

  onSubMenuTitleChange(title: string): void {
    this.titleChanged.emit(title);
  }

  onNavigateBackByIcon(): void {
    this.checkInSubMenu();

    this.navigateBackByIcon.emit({
      menuItems: this.menuList,
      level: this.level
    });
  }

  onNavigateBack(): void {
    this.checkInSubMenu();

    this.navigateBackByName.emit({
      menuItems: this.menuList,
      level: this.level
    });
  }

  checkInSubMenu(): void {
    if (this.inSubMenu) {
      const hasSubItems = this.menuList?.some(
        (item: BladeNavListItemModel) => item.subItems && item.subItems.length > 0
      );

      if (!hasSubItems) {
        this.inSubMenu = false;
      }
    }
  }

  getWidth(): string {
    if (this.inSubMenu) {
      if (this.isCollapsed) {
        return '30px';
      } else {
        const calculate = 265 + 35 * (this.numberOfItemsToShow - this.level);

        return calculate.toString() + 'px';
      }
    } else {
      if (this.isCollapsed) {
        return '30px';
      } else {
        return '265px';
      }
    }
  }

  onCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.isMenuCollapsed.emit(this.isCollapsed);
  }
}
