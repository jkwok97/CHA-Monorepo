import { FactoryProvider, InjectionToken } from '@angular/core';
import { AppConfigModel } from '../models';

export const APP_CONFIG = new InjectionToken<AppConfigModel>('APP_CONFIG');

export const WINDOW = new InjectionToken<Window>('window');

export const WindowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: getWindow,
};

export function getWindow(): Window {
  return window;
}
