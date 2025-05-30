import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BladeNavListItemModel } from '../../models';

@Component({
  selector: 'blade-multi-level-menu-item',
  templateUrl: './multi-level-menu-item.component.html',
  styleUrl: './multi-level-menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiLevelMenuItemComponent {
  _inSubMenu!: boolean;

  @Input() menuItem!: BladeNavListItemModel;
  @Input() set inSubMenu(value: boolean) {
    this._inSubMenu = value;
  }
  @Input() teamColor: string | undefined;
  @Input() teamTextColor: string | undefined;

  @Output() subMenuItemClicked = new EventEmitter<BladeNavListItemModel>();
  @Output() subMenuTitle = new EventEmitter<string>();

  onMenuItemClick(): void {
    if (this.menuItem.subItems && this.menuItem.subItems.length > 0) {
      this.subMenuItemClicked.emit(this.menuItem);
      this.subMenuTitle.emit(this.menuItem.label);
    }
  }
}
