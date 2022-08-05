import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainRoutingModule } from './cha-admin-main-routing.module';

import { MainComponent } from './containers';
import { MainResolver } from './resolvers';

@NgModule({
  imports: [CommonModule, ChaAdminMainRoutingModule],
  declarations: [MainComponent],
  providers: [MainResolver],
})
export class ChaAdminMainModule {}
