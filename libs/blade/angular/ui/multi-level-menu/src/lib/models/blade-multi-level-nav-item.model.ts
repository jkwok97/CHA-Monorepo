export interface BladeMultiLevelNavItem {
  key: string;
  label?: string;
  icon?: string;
  routerLink?: string[];
  requiredPermission?: string;
  attrDataElement?: string;
  active?: boolean;
  isVisible?: boolean;
  permissionList?: string[];
}
