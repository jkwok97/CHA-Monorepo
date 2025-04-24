import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  bladeMultiLevelMenuAnimations,
  bladeSlideInLeftAnimation,
} from '../../animations';
import { BladeMultiLevelNav, BladeNavListItemModel } from '../../models';
import { delay, filter } from 'rxjs';
import { BladeMultiLevelNavItem } from '../../models/blade-multi-level-nav-item.model';

@Component({
  selector: 'blade-multi-level-menu',
  templateUrl: './multi-level-menu.component.html',
  styleUrl: './multi-level-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    bladeMultiLevelMenuAnimations.fadeInOut,
    bladeSlideInLeftAnimation.slideInLeft
  ]
})
export class MultiLevelMenuComponent implements OnInit {
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private _portal!: TemplatePortal;

  mainMenuList: BladeNavListItemModel[] = [];
  menuItemList: BladeMultiLevelNav[] = [];
  tempMenuItemList: BladeMultiLevelNav[] = [];
  inSubMenu = false;
  mode!: 'over' | 'push';
  maxWidthPoint = '(max-width: 768px)';
  opened = false;
  isCollapsed = false;

  _title!: string;
  _overlayRef!: OverlayRef;

  @Input() customHeightClassName? = '';
  @Input() homeTitle?: string;
  @Input() logo?: string;
  @Input() hasTopNav = true;

  @Input() set menuList(value: BladeNavListItemModel[]) {
    this.mainMenuList = value;

    setTimeout(() => {
      this.menuItemList = this.formatMenuList(value);

      this.findMenuItem();
      this.numberOfSubMenusShown.emit(this.menuItemList.length);
      this.cdr.markForCheck();
    }, 1);
  }

  @Input() footerTmpl!: TemplateRef<void>;

  @Output() numberOfSubMenusShown = new EventEmitter<number>();
  @Output() isMenuOpen = new EventEmitter<boolean>();
  @Output() isMenuCollapsed = new EventEmitter<boolean>();

  @ViewChild('overlayTmpl') content!: TemplateRef<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef
  ) {
    this.router.events
      .pipe(
        delay(100),
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event: NavigationEnd) => {
        const navItem = this.getNavItem(event.url);

        if (navItem && navItem.level !== this.menuItemList[0].level) {
          this.menuItemList = [];

          setTimeout(() => {
            this.menuItemList = this.formatMenuList(this.mainMenuList);

            this.findMenuItem();
            this.numberOfSubMenusShown.emit(this.menuItemList.length);
            this.cdr.markForCheck();
          }, 1);
        }
      });
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([this.maxWidthPoint])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result: BreakpointState) => {
        result.matches ? (this.mode = 'over') : (this.mode = 'push');

        if (this.mode === 'over') {
          this.opened = false;
        } else {
          if (this._overlayRef) {
            this._overlayRef.detach();
          }
          this.opened = true;
        }
        this.isMenuOpen.emit(this.opened);
        this.cdr.detectChanges();
      });
  }

  handleOver(): void {
    if (this.opened) return;

    if (!this._overlayRef) {
      this._overlayRef = this._overlay.create({
        hasBackdrop: true
      });

      this._overlayRef
        .backdropClick()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this._overlayRef.detach();

          this.menuItemList = this.menuItemList.filter(
            (item: BladeMultiLevelNav) => item.level === 1
          );
        });

      this._portal = new TemplatePortal(this.content, this._viewContainerRef);
    }

    this._overlayRef.attach(this._portal);
  }

  getNavItem(url: string): BladeMultiLevelNav | undefined {
    return this.menuItemList.find((item: BladeMultiLevelNav) => {
      return item.items?.find((subItem: BladeMultiLevelNavItem) => {
        return url.includes(
          subItem.routerLink ? subItem.routerLink[0] : 'null'
        );
      });
    });
  }

  findMenuItem(): void {
    const url = this.router.url;

    this.mainMenuList.forEach((item: BladeNavListItemModel) => {
      const found = item.subItems?.find((subItem: BladeNavListItemModel) => {
        const matchingKey = url.includes(subItem.key);
        const matchingRelatedRoute = subItem.relatedRoutes?.some((route) => {
          return url.includes(route);
        })
        return matchingKey || matchingRelatedRoute;
      });

      const foundFirstLevelSubItem = item.subItems?.find(
        (subItem: BladeNavListItemModel) => {
          return subItem.subItems?.some((subSubItem: BladeNavListItemModel) => {
            return url.includes(subSubItem.key);
          });
        }
      );

      if (found || foundFirstLevelSubItem) {
        this.onMenuItemClicked(item);
        this.inSubMenu = true;
      }

      if (foundFirstLevelSubItem) {
        this.onMenuItemClicked(foundFirstLevelSubItem);

        const foundSecondLevelSubItem = foundFirstLevelSubItem.subItems?.find(
          (subItem: BladeMultiLevelNavItem) => {
            return url.includes(subItem.key);
          }
        );

        if (foundSecondLevelSubItem && foundSecondLevelSubItem.subItems) {
          this.onMenuItemClicked(foundSecondLevelSubItem);
        }
      }

      this.cdr.markForCheck();
    });
  }

  onMenuItemClicked(menuItemClicked: BladeNavListItemModel): void {
    this.menuItemList.sort((a, b) => a.level - b.level);

    const menuItem = {
      level: this.menuItemList.length + 1,
      icon: menuItemClicked.icon,
      title: menuItemClicked.label ? menuItemClicked.label : '',
      zIndex: this.menuItemList[this.menuItemList.length - 1].zIndex + 1,
      items: menuItemClicked.subItems ? menuItemClicked.subItems : []
    };

    this.menuItemList.push(menuItem);
    this.menuItemList.sort((a, b) => b.level - a.level);

    this.inSubMenu = this.menuItemList.length > 1;

    this.numberOfSubMenusShown.emit(this.menuItemList.length);
  }

  setLevelOneMenuItems(level: number): void {
    const itemToCheck = this.menuItemList.find((item) => item.level === level);

    this.menuItemList = this.menuItemList.filter(
      (menuItem: BladeMultiLevelNav) => menuItem.items === itemToCheck?.items
    );
  }

  onNavigateBackByIcon(event: {
    menuItems: BladeNavListItemModel[];
    level: number
  }): void {
    if (event.level === 1) {
      this.setLevelOneMenuItems(event.level);
    } else {
      if (this.menuItemList.length > 2) {
        if (event.menuItems.length === 1) {
          this.menuItemList = this.menuItemList.filter(
            (menuItem: BladeMultiLevelNav) =>
              menuItem.items !== event.menuItems[0].subItems ||
              menuItem.level === 1
          );
        } else {
          if (this.menuItemList.length > 3) {
            this.menuItemList = this.menuItemList.filter(
              (menuItem: BladeMultiLevelNav) =>
                menuItem.items === event.menuItems ||
                menuItem.level === 1 ||
                menuItem.level === 2
            );
          } else {
            this.menuItemList = this.menuItemList.filter(
              (menuItem: BladeMultiLevelNav) =>
                menuItem.items === event.menuItems || menuItem.level === 1
            );
          }
        }
      } else {
        this.menuItemList = this.menuItemList.filter(
          (menuItem: BladeMultiLevelNav) => menuItem.items !== event.menuItems
        );
      }
    }

    if (this.menuItemList.length < 2) {
      this.inSubMenu = false;
    }

    this.numberOfSubMenusShown.emit(this.menuItemList.length);

    this.cdr.markForCheck();
  }

  onNavigateBackByName(event: {
    menuItems: BladeNavListItemModel[];
    level: number;
  }): void {
    if (event.level === 1) {
      this.setLevelOneMenuItems(event.level);
    } else {
      if (this.menuItemList.length > 2) {
        this.menuItemList = this.menuItemList.filter(
          (menuItem: BladeMultiLevelNav) =>
            menuItem.items !== event.menuItems || menuItem.level === 1
        );
      } else {
        this.menuItemList = this.menuItemList.filter(
          (menuItem: BladeMultiLevelNav) => menuItem.items !== event.menuItems
        );
      }
    }

    if (this.menuItemList.length < 2) {
      this.inSubMenu = false;
    }

    this.numberOfSubMenusShown.emit(this.menuItemList.length);

    this.cdr.markForCheck();
  }

  onCurrentSubMenu(menuItem: BladeNavListItemModel): void {
    this.inSubMenu = true;
  }

  onTitleChanged(value: string): void {
    this._title = value;
  }

  private formatMenuList(list: BladeNavListItemModel[]): BladeMultiLevelNav[] {
    const menuItem: BladeMultiLevelNav = {
      level: 1,
      zIndex: 500,
      title: this.homeTitle,
      logo: this.logo,
      items: list
    };

    return [menuItem];
  }

  getWidth(): string {
    if (this.menuItemList.length > 1) {
      if (this.isCollapsed) {
        this.menuItemList = this.menuItemList.filter(
          (item: BladeMultiLevelNav) => item.level === 1
        );
        this.numberOfSubMenusShown.emit(1);
        return '30px';
      } else {
        const calculate = 265 + 35 * (this.menuItemList.length - 1);

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

  onMenuCollapsed(isMenuCollapsed: boolean): void {
    this.isCollapsed = isMenuCollapsed;

    if (this.isCollapsed) {
      this.tempMenuItemList = this.menuItemList;
    } else {
      if (this.tempMenuItemList.length > 0) {
        this.menuItemList = [...this.tempMenuItemList];
        this.tempMenuItemList = [];
        this.numberOfSubMenusShown.emit(this.menuItemList.length);
        this.cdr.markForCheck();
      }
    }

    this.isMenuCollapsed.emit(this.isCollapsed);
  }
}
