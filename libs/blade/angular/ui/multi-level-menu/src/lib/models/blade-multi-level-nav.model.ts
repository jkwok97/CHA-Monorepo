import { BladeNavListItemModel } from './blade-nav-list-item.model';

export interface BladeMultiLevelNav {
  level: number;
  title?: string;
  logo?: string;
  icon?: string;
  zIndex: number;
  items: BladeNavListItemModel[];
}
