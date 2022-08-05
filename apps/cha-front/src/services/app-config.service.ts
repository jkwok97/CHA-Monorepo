import { Injectable } from '@angular/core';
import { AppConfigModel } from '@cha/cha-angular/domain/app-config';
import { APP_CONFIG_BASE } from '../config/app-config.base';

@Injectable()
export class AppConfigService {
  private _appConfig!: AppConfigModel;

  constructor() {
    this.setAppConfig();
  }

  setAppConfig() {
    const hostname = window.location.hostname;

    switch (hostname) {
      default:
        this._appConfig = APP_CONFIG_BASE;
        break;
    }
  }

  getConfig(): AppConfigModel {
    return this._appConfig;
  }

  getApiUrl() {
    return this._appConfig.apiUrl;
  }
}
