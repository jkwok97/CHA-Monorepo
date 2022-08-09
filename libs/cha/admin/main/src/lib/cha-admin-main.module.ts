import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainRoutingModule } from './cha-admin-main-routing.module';

import { MainComponent } from './containers';
import { MainResolver } from './resolvers';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { MenuComponent } from '@blade/angular/ui/menu';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminMainRoutingModule,
    MenuComponent,
    BladeAngularUiLayoutModule,
  ],
  declarations: [MainComponent],
  providers: [MainResolver],
})
export class ChaAdminMainModule {}
