import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScheduleGamesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: ScheduleGamesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminScheduleGamesRoutingModule {}