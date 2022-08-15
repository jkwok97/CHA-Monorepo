import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainDraftMgmtComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainDraftMgmtComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'table',
      },
      {
        path: 'table',
        loadChildren: () =>
          import('@cha/admin/draft-mgmt-table').then(
            (mod) => mod.ChaAdminDraftMgmtTableModule
          ),
      },
      {
        path: 'entry',
        loadChildren: () =>
          import('@cha/admin/draft-mgmt-entry').then(
            (mod) => mod.ChaAdminDraftMgmtEntryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminMainDraftMgmtRoutingModule {}
