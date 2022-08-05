import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { APP_CONFIG } from '@cha/domain/app-config';
import { MainTitleComponent } from '@cha/domain/main-title';

import { AppRoutingModule } from './app-router.module';
import { AppConfigService } from '../services';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.setAppConfig();
  };
};

const getConfig = (appConfig: AppConfigService) => {
  return appConfig.getConfig();
};

const getApiUrl = (appConfig: AppConfigService) => {
  return appConfig.getConfig().apiUrl;
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MainTitleComponent,

    BladeAngularUiLayoutModule,

    EffectsModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      name: 'Continental Hockey Association',
      logOnly: environment.production,
    }),
  ],
  declarations: [AppComponent],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: APP_CONFIG,
      useFactory: getConfig,
      multi: false,
      deps: [AppConfigService],
    },
    {
      provide: 'apiUrl',
      useFactory: getApiUrl,
      multi: false,
      deps: [AppConfigService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
