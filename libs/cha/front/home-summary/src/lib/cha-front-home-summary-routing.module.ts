import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeSummaryComponent } from './containers';
import {
  HomeSummaryDepthChartComponent,
  HomeSummarySalariesComponent,
} from './components';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeSummaryComponent,
    children: [
      {
        path: 'depth-chart',
        component: HomeSummaryDepthChartComponent,
      },
      {
        path: 'salaries',
        component: HomeSummarySalariesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHomeRoutingModule {}
