import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontLeagueSalariesRoutingModule } from './cha-front-league-salaries-routing.module';

import { LeagueSalariesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontLeagueSalariesRoutingModule],
  declarations: [LeagueSalariesComponent],
})
export class ChaFrontLeagueSalariesModule {}
