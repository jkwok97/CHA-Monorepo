import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import { reducer } from './+state/auth.reducer';
import { AuthGuard } from './guards';
import { SharedAuthResolver } from './resolvers';
import { AuthService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService,
    AuthEffects,
    AuthFacade,
    AuthGuard,
    SharedAuthResolver,
  ],
})
export class ChaDomainAuthModule {
  constructor(@Optional() @SkipSelf() parentModule?: ChaDomainAuthModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
