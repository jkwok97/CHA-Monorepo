import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainDraftComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainDraftComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'current',
      },
      {
        path: 'current',
        loadChildren: () =>
          import('@cha/front/draft-current').then(
            (mod) => mod.ChaFrontDraftCurrentModule
          ),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('@cha/front/draft-summary').then(
            (mod) => mod.ChaFrontDraftSummaryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontMainDraftRoutingModule {}
