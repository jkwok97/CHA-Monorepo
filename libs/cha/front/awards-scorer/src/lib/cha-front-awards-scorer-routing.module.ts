import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AwardsScorerComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: AwardsScorerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontAwardsScorerRoutingModule {}