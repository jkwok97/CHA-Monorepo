import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueDivisionsComponent } from './containers';
import { ChaAdminLeagueDivisionsRoutingModule } from './cha-admin-league-divisions-routing.module';

@NgModule({
  imports: [CommonModule, ChaAdminLeagueDivisionsRoutingModule],
  declarations: [LeagueDivisionsComponent],
})
export class ChaAdminLeagueDivisionsModule {}
