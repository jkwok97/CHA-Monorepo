import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeagueConferencesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueConferencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminLeagueConferencesRoutingModule {}
