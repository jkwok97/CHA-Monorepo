import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from '@cha/domain/logo';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { MenuComponent } from '@blade/angular/ui/menu';

import { ChaFrontMainRoutingModule } from './cha-front-main-routing.module';

import { MainResolver } from './resolvers';

import { MainComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontMainRoutingModule,
    LogoComponent,
    MenuComponent,
    BladeAngularUiLayoutModule,
  ],
  declarations: [MainComponent],
  providers: [MainResolver],
})
export class ChaFrontMainModule {}
