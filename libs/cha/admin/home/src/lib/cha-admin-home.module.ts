import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminHomeRoutingModule } from './cha-admin-home-routing.module';

import { HomeComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminHomeRoutingModule],
  declarations: [HomeComponent],
})
export class ChaAdminHomeModule {}
