import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  routerReducer,
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { UrlRouterEffects } from './+state/url-router.effects';
import { UrlRouterCustomSerializer } from './models';
import { UrlRouterService } from './services';

@NgModule({
  imports: [
    StoreModule.forFeature('router', routerReducer),
    EffectsModule.forFeature([UrlRouterEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  providers: [
    UrlRouterEffects,
    UrlRouterService,
    {
      provide: RouterStateSerializer,
      useClass: UrlRouterCustomSerializer,
    },
  ],
})
export class ChaDomainUrlRouterModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ChaDomainUrlRouterModule
  ) {
    if (parentModule) {
      throw new Error(
        'SharedRouterModule is already loaded. Import only in AppModule'
      );
    }
  }
}
