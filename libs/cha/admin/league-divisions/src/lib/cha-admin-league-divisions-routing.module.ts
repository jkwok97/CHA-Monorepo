import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeagueDivisionsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueDivisionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminLeagueDivisionsRoutingModule {}
