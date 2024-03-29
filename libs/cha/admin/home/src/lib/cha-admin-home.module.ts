import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgScrollbarModule } from 'ngx-scrollbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { LogoComponent } from '@cha/domain/logo';

import { ChaAdminHomeRoutingModule } from './cha-admin-home-routing.module';

import { HomeComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminHomeRoutingModule,
    NgScrollbarModule,
    BladeAngularUiLayoutModule,
    LogoComponent,
  ],
  declarations: [HomeComponent],
})
export class ChaAdminHomeModule {}
