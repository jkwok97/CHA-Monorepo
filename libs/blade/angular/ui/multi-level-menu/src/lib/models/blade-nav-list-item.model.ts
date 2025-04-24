export interface BladeNavListItemModel {
  key: string;
  label?: string;
  icon?: string;
  routerLink?: string[];
  attrDataElement?: string;
  active?: boolean;
  isVisible?: boolean;
  subItems?: BladeNavListItemModel[];
  relatedRoutes?: string[];
}
