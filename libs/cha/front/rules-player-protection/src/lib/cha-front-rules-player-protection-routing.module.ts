import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RulesPlayerProtectionComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: RulesPlayerProtectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontRulesPlayerProtectionRoutingModule {}
