import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueSalariesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueSalariesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontLeagueSalariesRoutingModule {}